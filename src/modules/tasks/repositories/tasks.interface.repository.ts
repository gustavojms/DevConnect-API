import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";

export interface TasksInterfaceRepository {
  create(projectId: number, data: CreateTaskDto): Promise<CreateTaskDto>;
  findAll(): Promise<CreateTaskDto[]>;
  findAllByProject(projectId: number): Promise<CreateTaskDto[]>;
  findAllByStatus(projectId: number, status: string): Promise<CreateTaskDto[]>;
  findById(id: number): Promise<CreateTaskDto>;
  update(id: number, data: UpdateTaskDto): Promise<UpdateTaskDto>;
  delete(id: number): Promise<void>;
}
