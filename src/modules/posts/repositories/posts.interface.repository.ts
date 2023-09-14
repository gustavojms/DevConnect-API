import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

export interface PostsInterfaceRepository {
  create(post: CreatePostDto): Promise<CreatePostDto>;
  findAll(): Promise<CreatePostDto[]>;
  findOne(id: number): Promise<CreatePostDto>;
  update(id: number, post: CreatePostDto): Promise<UpdatePostDto>;
  remove(id: number): Promise<void>;
}
