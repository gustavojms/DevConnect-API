import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team_member.dto';
import { TeamMembersRepository } from './repositories/team_members.repository';

@Injectable()
export class TeamMembersService {
  constructor(private teamMembersRepository: TeamMembersRepository) {}

  create(createTeamMemberDto: CreateTeamMemberDto) {
    return this.teamMembersRepository.create(createTeamMemberDto);
  }

  findAll() {
    return this.teamMembersRepository.findAll();
  }

  findOne(id: number) {
    return this.teamMembersRepository.findOne(id);
  }

  remove(id: number) {
    return this.teamMembersRepository.remove(id);
  }
}
