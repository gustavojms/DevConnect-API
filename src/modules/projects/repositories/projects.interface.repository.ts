import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

export interface ProjectInterfaceRepository {
  create(project: CreateProjectDto): Promise<CreateProjectDto>;
  findAll(): Promise<CreateProjectDto[]>;
  findAllByTeamMember(id: number): Promise<CreateProjectDto[]>;
  findOne(id: number): Promise<CreateProjectDto>;
  update(id: number, project: UpdateProjectDto): Promise<UpdateProjectDto>;
  remove(id: number): Promise<void>;
}
