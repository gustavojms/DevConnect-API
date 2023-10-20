import { PrismaService } from 'src/database/prisma.service';
import { CreateSprintDto } from '../dto/create-sprint.dto';
import { SprintInterfaceRepository } from './sprint.interface.repository';
import { UpdateSprintDto } from '../dto/update-sprint.dto';
import { Inject } from '@nestjs/common';

export class SprintRepository implements SprintInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(sprint: CreateSprintDto): Promise<CreateSprintDto> {
    const sprintCreated = await this.prisma.sprint.create({
      data: {
        title: sprint.title,
        term: sprint.term,
      },
    });

    return sprintCreated;
  }

  async findAll(): Promise<CreateSprintDto[]> {
    const sprints = await this.prisma.sprint.findMany();

    return sprints;
  }

  async findOne(sprintId: number): Promise<CreateSprintDto> {
    const sprint = await this.prisma.sprint.findUnique({
      where: {
        sprintId: sprintId,
      },
    });

    return sprint;
  }

  async update(
    sprintId: number,
    sprint: UpdateSprintDto,
  ): Promise<UpdateSprintDto> {
    const sprintUpdated = await this.prisma.sprint.update({
      where: {
        sprintId: sprintId,
      },
      data: {
        title: sprint.title,
        term: new Date(),
      },
    });

    return sprintUpdated;
  }

  async remove(sprintId: number): Promise<void> {
    await this.prisma.sprint.delete({
      where: {
        sprintId: sprintId,
      },
    });
  }
}
