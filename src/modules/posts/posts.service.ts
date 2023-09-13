import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  async create(createPostDto: CreatePostDto) {
    const post = await this.postsRepository.create(createPostDto);
    return post;
  }

  async findAll() {
    const posts = await this.postsRepository.findAll();
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postsRepository.findOne(id);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postsRepository.update(id, updatePostDto);
    return post;
  }

  async remove(id: number) {
    await this.postsRepository.remove(id);
  }
}
