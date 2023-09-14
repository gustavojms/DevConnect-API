import { Injectable } from '@nestjs/common';
import { LikesRepository } from './repositories/likes.repository';

@Injectable()
export class LikesService {
  constructor(private likesRepository: LikesRepository) {}

  async likePost(authorId: number, postId: number): Promise<void> {
    await this.likesRepository.likePost(authorId, postId);
  }

  async unlikePost(authorId: number, postId: number): Promise<void> {
    await this.likesRepository.unlikePost(authorId, postId);
  }
}
