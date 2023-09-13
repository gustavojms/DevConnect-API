import { Post } from '@prisma/client';

export class PostEntity implements Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
