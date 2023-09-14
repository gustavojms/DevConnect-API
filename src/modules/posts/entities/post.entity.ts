import { Post } from '@prisma/client';

export class PostEntity implements Post {
  postId: number;
  content: string;
  userId: number;
  likesCount: number;
  createdAt: Date;
  updatedAt: Date;
}
