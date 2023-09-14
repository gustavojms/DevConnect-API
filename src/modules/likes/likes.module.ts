import { LikesRepository } from './repositories/likes.repository';
import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [LikesController],
  providers: [LikesService, LikesRepository, PrismaService],
})
export class LikesModule {}
