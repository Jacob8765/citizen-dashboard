import { ChatOpenAI } from "langchain/chat_models/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PromptTemplate } from "langchain/prompts";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "langchain/schema/runnable";
import { StringOutputParser } from "langchain/schema/output_parser";
import { formatDocumentsAsString } from "langchain/util/document";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

interface AISummaryResult {
  result: string;
  vectorId: string;
}

export const getAISummary = async (text: string): Promise<AISummaryResult> => {
  const model = new ChatOpenAI({});

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100,
  });

  const documents = await splitter.createDocuments([text]);

  const vectorStore = await HNSWLib.fromDocuments(
    documents,
    new OpenAIEmbeddings(),
  );

  const randomId = Math.random().toString(36).substring(7);
  const directory = `/Users/jacob/Documents/citizen-dashboard/vectordumps/${randomId}`;

  try {
    await vectorStore.save(directory);
    console.log(`Saved vector store to ${directory}`);
  } catch (error: any) {
    console.error(`Failed to save vector store: ${error.message}`);
  }

  const retriever = vectorStore.asRetriever();

  const prompt =
    PromptTemplate.fromTemplate(`You are a journalist answering questions about news articles and government information in an unbiased way. Your goal is to help citizens stay informed and increase voter participation. Answer the question based on the context.:
    {context}
    
    Question: {question}`);

  const chain = RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  const result = await chain.invoke(
    "Write a 1-2 paragraph summary of the issue or legislation provided",
  );

  return { result, vectorId: randomId };
};
