import { Inject } from '@nestjs/common';
import { LikesInterfaceRepository } from './likes.interface.repository';
import { PrismaService } from 'src/database/prisma.service';

export class LikesRepository implements LikesInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async likePost(userId: number, postId: number): Promise<void> {
    const user = await this.prisma.user.findFirst({
      where: { userId: userId },
      include: {
        Like: {
          where: {
            postId: postId,
          },
        },
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.Like.length > 0) {
      throw new Error('You have already liked this post');
    }

    const post = await this.prisma.post.findUnique({
      where: { postId: postId },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    await this.prisma.like.create({
      data: {
        userId: userId,
        postId: postId,
      },
    });

    await this.prisma.post.update({
      where: { postId: postId },
      data: {
        likesCount: {
          increment: 1,
        },
      },
    });
  }

  async unlikePost(userId: number, postId: number): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: { userId: userId },
      include: {
        Like: {
          where: { postId },
        },
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const post = await this.prisma.post.findUnique({
      where: { postId: postId },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    const like = await this.prisma.like.findFirst({
      where: {
        userId: userId,
        postId: postId,
      },
    });

    await this.prisma.like.delete({
      where: {
        likeId: like.likeId,
      },
    });

    await this.prisma.post.update({
      where: { postId: postId },
      data: {
        likesCount: {
          decrement: 1,
        },
      },
    });
  }
}
