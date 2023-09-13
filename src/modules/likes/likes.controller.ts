import { Controller, Post, Body, Param } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('api/posts/:postId/')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('like')
  likePost(@Param('postId') postId: number, @Body('userId') userId: number) {
    return this.likesService.likePost(+postId, userId);
  }

  @Post('unlike')
  unlikePost(@Param('postId') postId: number, @Body('userId') userId: number) {
    return this.likesService.unlikePost(+postId, userId);
  }
}
