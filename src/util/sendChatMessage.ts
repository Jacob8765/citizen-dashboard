export const sendChatMessage = async (message: string, vectorId: string) => {
  try {
    // Fetch the HTML content of the webpage using fetch
    const response = await fetch(
      `https://api.chatengine.io/chats/${vectorId}/messages/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY || "",
        },
        body: JSON.stringify({
          text: message,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to send message. Status: ${response.status}`);
    }

    return response;
  } catch (error: any) {
    console.error("Error sending message:", error.message);
    throw error;
  }
};
