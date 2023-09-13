import { Like } from '@prisma/client';

export class LikeEntity implements Like {
  userId: number;
  likeId: number;
  authorId: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
}
