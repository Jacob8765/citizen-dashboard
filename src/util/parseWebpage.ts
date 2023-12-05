import * as cheerio from "cheerio";

export async function parseWebpage(url: string): Promise<string> {
  try {
    // Fetch the HTML content of the webpage using fetch
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch webpage. Status: ${response.status}`);
    }

    const html = await response.text();

    // Use Cheerio to parse HTML
    const $ = cheerio.load(html);

    // Extract and concatenate text content
    const textContent = $("body").text();

    return textContent;
  } catch (error: any) {
    console.error("Error parsing webpage:", error.message);
    throw error;
  }
}
