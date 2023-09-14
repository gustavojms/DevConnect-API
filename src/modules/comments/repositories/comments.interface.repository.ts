import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';

export interface CommentsInterfaceRepository {
  create(postId: number, comment: CreateCommentDto): Promise<CreateCommentDto>;
  findAll(): Promise<CreateCommentDto[]>;
  findOne(id: number): Promise<CreateCommentDto>;
  update(
    id: number,
    postId: number,
    comment: UpdateCommentDto,
  ): Promise<UpdateCommentDto>;
  remove(id: number): Promise<void>;
}
