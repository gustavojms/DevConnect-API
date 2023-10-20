import { CreateSprintDto } from '../dto/create-sprint.dto';
import { UpdateSprintDto } from '../dto/update-sprint.dto';

export interface SprintInterfaceRepository {
  create(sprint: CreateSprintDto): Promise<CreateSprintDto>;
  findAll(): Promise<CreateSprintDto[]>;
  findOne(sprintId: number): Promise<CreateSprintDto>;
  update(sprintd: number, sprint: UpdateSprintDto): Promise<UpdateSprintDto>;
  remove(sprintId: number): Promise<void>;
}
