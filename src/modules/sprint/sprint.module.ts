import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';
import { SprintRepository } from './repositories/sprint.repository';

@Module({
  controllers: [SprintController],
  providers: [SprintService, SprintRepository, PrismaService],
})
export class SprintModule {}
