import { TeamMember } from '@prisma/client';

export class TeamMemberEntity implements TeamMember {
  teamMemberId: number;
  memberId: number;
  teamId: number;
  createdAt: Date;
  updatedAt: Date;
}
