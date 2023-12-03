export interface FeedItem {
  type: "legislation" | "news" | "event" | "discussion" | "poll";
  title: string;
  description: string;
  date: Date;
  id: string;
}
