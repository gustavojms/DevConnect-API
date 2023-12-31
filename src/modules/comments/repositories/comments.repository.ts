import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';

export class CommentsRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(
    postId: number,
    comment: CreateCommentDto,
  ): Promise<CreateCommentDto> {
    const authorId = Number(comment.authorId);
    const commentCreated = await this.prisma.comment.create({
      data: {
        content: comment.content,
        authorId: authorId,
        postId: postId,
      },
    });

    return commentCreated;
  }

  async findAll(): Promise<CreateCommentDto[]> {
    const comments = await this.prisma.comment.findMany();

    return comments;
  }

  async findOne(commentId: number): Promise<CreateCommentDto> {
    const comment = await this.prisma.comment.findUnique({
      where: {
        commentId: commentId,
      },
    });

    return comment;
  }

  async update(
    commentId: number,
    postId: number,
    comment: UpdateCommentDto,
  ): Promise<UpdateCommentDto> {
    const authorId = Number(comment.authorId);
    const commentUpdated = await this.prisma.comment.update({
      where: {
        commentId: commentId,
      },
      data: {
        content: comment.content,
        authorId: authorId,
        postId: postId,
        updatedAt: new Date(),
      },
    });

    return commentUpdated;
  }

  async remove(commentId: number): Promise<void> {
    await this.prisma.comment.delete({
      where: {
        commentId: commentId,
      },
    });
  }
}
