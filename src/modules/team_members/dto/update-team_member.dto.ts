import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamMemberDto } from './create-team_member.dto';

export class UpdateTeamMemberDto extends PartialType(CreateTeamMemberDto) {
    teamId: number;
    memberIds: any[]; 
}
