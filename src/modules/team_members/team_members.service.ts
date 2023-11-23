import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team_member.dto';
import { TeamMembersRepository } from './repositories/team_members.repository';

@Injectable()
export class TeamMembersService {
  constructor(private teamMembersRepository: TeamMembersRepository) {}

  create(createTeamMemberDto: CreateTeamMemberDto) {
    return this.teamMembersRepository.create(createTeamMemberDto);
  }

  findAll(id:number) {
    return this.teamMembersRepository.findAll(id);
  }

  findOne(id: number) {
    return this.teamMembersRepository.findOne(id);
  }

  remove(id: number) {
    return this.teamMembersRepository.remove(id);
  }

  update(id: number, createTeamMemberDto: CreateTeamMemberDto[]) {
    return this.teamMembersRepository.update(id, createTeamMemberDto);
  }
}
