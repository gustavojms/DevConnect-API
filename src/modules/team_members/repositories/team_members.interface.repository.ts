import { CreateTeamMemberDto } from '../dto/create-team_member.dto';

export interface TeamMembersInterfaceRepository {
  create(teamMember: CreateTeamMemberDto): Promise<CreateTeamMemberDto>;
  findAll(teamId:number);
  findOne(teamMemberId: number): Promise<CreateTeamMemberDto>;
  remove(teamMemberId: number): Promise<void>;
}
