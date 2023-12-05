export interface NewPost {
  type: "legislation" | "news" | "event" | "discussion" | "poll";
  title: string;
  description: string;
  urls: string;
}
