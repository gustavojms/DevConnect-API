import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectRepository } from './repositories/project.repository';

@Injectable()
export class ProjectsService {
  constructor(private projectRepository: ProjectRepository) {}
  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.create(createProjectDto);
  }

  findAll() {
    return this.projectRepository.findAll();
  }

  findAllProjectsOfMember(id: number) {
    return this.projectRepository.findAllProjectsOfMember(id);
  }

  findAllMembersOfProject(id: number) {
    return this.projectRepository.findAllMembers(id);
  }

  findOne(id: number) {
    return this.projectRepository.findOne(id);
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.projectRepository.remove(id);
  }
}
