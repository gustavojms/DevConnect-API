import { Inject } from '@nestjs/common';
import { PostsInterfaceRepository } from './posts.interface.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

export class PostsRepository implements PostsInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(post: CreatePostDto): Promise<CreatePostDto> {
    const userId = Number(post.userId);
    const postCreated = await this.prisma.post.create({
      data: {
        content: post.content,
        userId: userId,
      },
    });

    return postCreated;
  }

  async findAll(): Promise<CreatePostDto[]> {
    const posts = await this.prisma.post.findMany({
      include: {
        User: {
          select: {
            username: true,
          },
        },
      },
    });
    
    return posts;
  }

  async findOne(postId: number): Promise<CreatePostDto> {
    const post = await this.prisma.post.findUnique({
      where: {
        postId: postId,
      },
    });

    return post;
  }

  async update(postId: number, post: UpdatePostDto): Promise<UpdatePostDto> {
    const userId = Number(post.userId);
    const postUpdated = await this.prisma.post.update({
      where: {
        postId: postId,
      },
      data: {
        content: post.content,
        userId: userId,
        updatedAt: new Date(),
      },
    });

    return postUpdated;
  }

  async remove(postId: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        postId: postId,
      },
    });
  }
}
