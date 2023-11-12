import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('api')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/projects/:projectId/task')
  create(
    @Param('projectId') projectId: number,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.create(+projectId, createTaskDto);
  }

  @Get('/task')
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('/projects/:projectId/task')
  findAllByProject(@Param('projectId') projectId: number) {
    return this.tasksService.findAllByProject(+projectId);
  }

  @Get('/projects/:projectId/task/:status')
  findAllByStatus(
    @Param('projectId') projectId: number,
    @Param('status') status: string,
  ) {
    return this.tasksService.findAllByStatus(+projectId, status);
  }

  @Get('/task/:id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch('/task/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete('/task/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }

  @Get('task/user/:userId')
  findByUser(@Param ('userId') userId: number){
    console.log('Type of userId in controller:', typeof userId);
    return this.tasksService.findAllByUser(+userId);
  }

}
