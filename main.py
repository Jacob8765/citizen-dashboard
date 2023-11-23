import dotenv

dotenv.load_dotenv()

from langchain.document_loaders import PyPDFLoader

loader = PyPDFLoader("test.pdf") # TODO pdf here
splits = loader.load_and_split()

# Embed and store splits

from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.callbacks import get_openai_callback

vectorstore = Chroma.from_documents(documents=splits, embedding=OpenAIEmbeddings(model="text-embedding-ada-002"))
retriever = vectorstore.as_retriever()

# Prompt
# https://smith.langchain.com/hub/rlm/rag-prompt

from langchain import hub

rag_prompt = hub.pull("rlm/rag-prompt")

# LLM

from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)

# RAG chain

from langchain.schema.runnable import RunnablePassthrough

rag_chain = {"context": retriever, "question": RunnablePassthrough()} | rag_prompt | llm

print(rag_chain.invoke("Who are district one candidates?")) # TODO question here