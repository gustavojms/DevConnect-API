import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CommentsRepository } from './repositories/comments.repository';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService, CommentsRepository],
})
export class CommentsModule {}
