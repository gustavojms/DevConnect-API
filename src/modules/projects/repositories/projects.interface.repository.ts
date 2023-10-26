import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';

export interface ProjectInterfaceRepository {
  create(project: CreateProjectDto): Promise<CreateProjectDto>;
  findAll(): Promise<CreateProjectDto[]>;
  findAllProjectsPublic(): Promise<CreateProjectDto[]>;
  findAllProjectsOfMember(id: number): Promise<CreateProjectDto[]>;
  findAllMembers(id: number);
  findOne(id: number): Promise<CreateProjectDto>;
  update(id: number, project: UpdateProjectDto): Promise<UpdateProjectDto>;
  remove(id: number): Promise<void>;
}
