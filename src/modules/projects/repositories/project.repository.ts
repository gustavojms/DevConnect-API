import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectInterfaceRepository } from './projects.interface.repository';

export class ProjectRepository implements ProjectInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(project: CreateProjectDto): Promise<CreateProjectDto> {
    const userId = Number(project.projectOwner);
    const projectCreated = await this.prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        projectOwner: userId,
        parentProjectId: project.parentProjectId,
      },
    });

    return projectCreated;
  }

  async findAll(): Promise<CreateProjectDto[]> {
    const projects = await this.prisma.project.findMany();

    return projects;
  }

  async findOne(id: number): Promise<CreateProjectDto> {
    const project = await this.prisma.project.findUnique({
      where: {
        projectId: id,
      },
    });

    return project;
  }

  async update(
    projectId: number,
    project: UpdateProjectDto,
  ): Promise<UpdateProjectDto> {
    const userId = Number(project.projectOwner);
    const projectUpdated = await this.prisma.project.update({
      where: {
        projectId: projectId,
      },
      data: {
        title: project.title,
        description: project.description,
        projectOwner: userId,
        updatedAt: new Date(),
      },
    });

    return projectUpdated;
  }

  async remove(projectId: number): Promise<void> {
    await this.prisma.project.delete({
      where: {
        projectId: projectId,
      },
    });
  }
}
