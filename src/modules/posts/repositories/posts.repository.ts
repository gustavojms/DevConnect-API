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
        title: post.title,
        body: post.body,
        userId: userId,
      },
    });

    return postCreated;
  }

  async findAll(): Promise<CreatePostDto[]> {
    const posts = await this.prisma.post.findMany();

    return posts;
  }

  async findOne(id: number): Promise<CreatePostDto> {
    const post = await this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    return post;
  }

  async update(id: number, post: UpdatePostDto): Promise<UpdatePostDto> {
    const userId = Number(post.userId);
    const postUpdated = await this.prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: post.title,
        body: post.body,
        userId: userId,
        updatedAt: new Date(),
      },
    });

    return postUpdated;
  }

  async remove(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        id: id,
      },
    });
  }
}
