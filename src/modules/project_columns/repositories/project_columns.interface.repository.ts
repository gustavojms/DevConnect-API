import { CreateProjectColumnDto } from '../dto/create-project_column.dto';

export interface ProjectColumnsInterfaceRepository {
  create(
    projectColumn: CreateProjectColumnDto,
  ): Promise<CreateProjectColumnDto>;
  findAll(projectId: number);
  findOne(projectColumnId: number): Promise<CreateProjectColumnDto>;
  remove(projectColumnId: number): Promise<void>;
  update(
    projectId: number,
    projectColumn: CreateProjectColumnDto[],
  ): Promise<void>;
}
