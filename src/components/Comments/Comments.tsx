import CommentEntry from "./CommentEntry";
import type { Comment } from "@/types/comment";

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div className="grid grid-cols-1 gap-2">
      {comments.map((comment) => (
        <CommentEntry comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
