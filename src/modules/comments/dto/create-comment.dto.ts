export class CreateCommentDto {
  commentId: number;
  content: string;
  postId: number;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}
