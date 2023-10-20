import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { SprintRepository } from './repositories/sprint.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintService {
  constructor(private sprintRepository: SprintRepository) {}

  create(createTeamDto: CreateSprintDto) {
    return this.sprintRepository.create(createTeamDto);
  }

  findAll() {
    return this.sprintRepository.findAll();
  }

  findOne(id: number) {
    return this.sprintRepository.findOne(id);
  }

  update(id: number, updateSprintDto: UpdateSprintDto) {
    return this.sprintRepository.update(id, updateSprintDto);
  }

  remove(id: number) {
    return this.sprintRepository.remove(id);
  }
}
