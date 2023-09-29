import { Inject } from "@nestjs/common";
import { CreateTaskDto } from "../dto/create-task.dto";
import { TasksInterfaceRepository } from "./tasks.interface.repository";
import { PrismaService } from "src/database/prisma.service";
import { UpdateTaskDto } from "../dto/update-task.dto";

export class TasksRepository implements TasksInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) { }

  async create(projectId: number, data: CreateTaskDto) {
    const task = await this.prisma.task.create({
      data: {
        projectId: projectId,
        ...data
      },
    });

    return task;

  }

  async findAll() {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async findAllByProject(projectId: number): Promise<CreateTaskDto[]> {
    const tasks = await this.prisma.task.findMany({
      where: {
        projectId: projectId
      }
    });

    return tasks;
  }

  async findById(taskId: number) {
    const task = await this.prisma.task.findFirst({
      where: {
        taskId: taskId,
      },
    });

    return task;
  }

  async update(taskId: number, data: UpdateTaskDto) {
    const task = await this.prisma.task.update({
      where: {
        taskId: taskId,
      },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });

    return task;
  }

  async delete(taskId: number) {
    await this.prisma.task.delete({
      where: {
        taskId: taskId,
      },
    });
  }
}
