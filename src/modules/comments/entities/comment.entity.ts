import { Comment } from '@prisma/client';

export class CommentEntity implements Comment {
  id: number;
  content: string;
  postId: number;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}
