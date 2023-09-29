import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";

export interface TasksInterfaceRepository {
  create(data: CreateTaskDto): Promise<CreateTaskDto>;
  findAll(): Promise<CreateTaskDto[]>;
  findById(id: number): Promise<CreateTaskDto>;
  update(id: number, data: UpdateTaskDto): Promise<UpdateTaskDto>;
  delete(id: number): Promise<void>;
}
