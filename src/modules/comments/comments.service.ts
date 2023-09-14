import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}
  async create(postId: number, createCommentDto: CreateCommentDto) {
    const comment = await this.commentsRepository.create(
      postId,
      createCommentDto,
    );
    return comment;
  }

  async findAll() {
    const comments = await this.commentsRepository.findAll();
    return comments;
  }

  async findOne(id: number) {
    const comment = await this.commentsRepository.findOne(id);
    return comment;
  }

  async update(id: number, postId: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentsRepository.update(
      id,
      postId,
      updateCommentDto,
    );
    return comment;
  }

  async remove(id: number) {
    await this.commentsRepository.remove(id);
  }
}
