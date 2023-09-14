import { CreateTeamMemberDto } from '../dto/create-team_member.dto';

export interface TeamMembersInterfaceRepository {
  create(teamMember: CreateTeamMemberDto): Promise<CreateTeamMemberDto>;
  findAll(): Promise<CreateTeamMemberDto[]>;
  findOne(teamMemberId: number): Promise<CreateTeamMemberDto>;
  remove(teamMemberId: number): Promise<void>;
}
