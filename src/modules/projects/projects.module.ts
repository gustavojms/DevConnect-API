import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectRepository } from './repositories/project.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService, ProjectRepository],
})
export class ProjectsModule {}
