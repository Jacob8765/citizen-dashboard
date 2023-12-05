import { Comment } from "@/types/comment";
import { FeedItem } from "@/types/feed";
import { Post } from "@prisma/client";

export const DUMMY_FEED: Post[] = [
  {
    type: "legislation",
    title: "New Legislation Proposal",
    description:
      "A new legislation proposal regarding residential zoning and permitting has been introduced for public review.",
    createdAt: new Date("2023-11-22T10:30:00Z"),
    vectorId: "1",
    summary: "",
    updatedAt: new Date("2023-11-22T10:30:00Z"),
    createdById: "1",
    sources: [
      "https://townofcutlerbay.gov/legislation/1534rf346tf3433434233434",
      "https://miamidadecounty.gov/news/2023/f2r3",
    ],
    id: 100,
  },
  {
    type: "news",
    vectorId: "2",
    summary: "",
    createdAt: new Date("2023-11-22T10:30:00Z"),
    createdById: "1",
    updatedAt: new Date("2023-11-22T10:30:00Z"),
    title: "City Park Renovation Update",
    description: "Updates on the Cutler Bay City Park Renovation project.",
    id: 101,
    sources: [
      "https://townofcutlerbay.gov/legislation/1534rf346tf3433434233434",
      "https://miamidadecounty.gov/news/2023/f2r3",
    ],
  },
  {
    type: "event",
    vectorId: "3",
    summary: "",
    createdAt: new Date("2023-11-22T10:30:00Z"),
    createdById: "1",
    updatedAt: new Date("2023-11-22T10:30:00Z"),
    title: "Community Cleanup Day",
    description:
      "Join us for a community cleanup day on Saturday. Let's work together to keep our neighborhood clean!",
    id: 102,
    sources: [
      "https://townofcutlerbay.gov/legislation/1534rf346tf3433434233434",
      "https://miamidadecounty.gov/news/2023/f2r3",
    ],
  },
  {
    type: "poll",
    vectorId: "4",
    summary: "",
    createdAt: new Date("2023-11-22T10:30:00Z"),
    createdById: "1",
    updatedAt: new Date("2023-11-22T10:30:00Z"),
    title: "Should we build a new library?",
    description:
      "The town recently recieved a grant for public development. Please vote if you think a portion of the funds should be used to build a new library.",
    id: 103,
    sources: [
      "https://townofcutlerbay.gov/legislation/1534rf346tf3433434233434",
      "https://miamidadecounty.gov/news/2023/f2r3",
    ],
  },
];

export const DUMMY_COMMENTS: Comment[] = [
  {
    id: "1",
    author: "John Doe",
    date: new Date("2023-11-22T10:30:00Z"),
    content: "This is a comment.",
  },
  {
    id: "2",
    author: "Jane Doe",
    date: new Date("2023-11-22T10:30:00Z"),
    content: "This is another comment.",
  },
];

export const FEED_ITEM_TYPE_THEME = {
  legislation: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    ),
    color: "bg-blue-200/20",
    hoverColor: "hover:bg-blue-200/40",
  },
  news: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
        />
      </svg>
    ),
    color: "bg-green-200/20",
    hoverColor: "hover:bg-green-200/40",
  },
  event: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      </svg>
    ),
    color: "bg-slate-200/20",
    hoverColor: "hover:bg-slate-200/40",
  },
  discussion: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    color: "bg-purple-200/20",
    hoverColor: "hover:bg-purple-200/40",
  },
  poll: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    color: "bg-red-200/20",
    hoverColor: "hover:bg-red-200/40",
  },
};
