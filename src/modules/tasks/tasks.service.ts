import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './repositories/tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TasksRepository) { }
  create(projectId: number, createTaskDto: CreateTaskDto) {
    return this.taskRepository.create(projectId, createTaskDto);
  }

  findAll() {
    return this.taskRepository.findAll();
  }

  findAllByProject(projectId: number) {
    return this.taskRepository.findAllByProject(projectId);
  }

  findOne(id: number) {
    return this.taskRepository.findById(id);
  }

  update(taskId: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(taskId, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
