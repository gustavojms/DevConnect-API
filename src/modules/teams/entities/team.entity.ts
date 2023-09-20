import { Team } from '@prisma/client';

export class TeamEntity implements Team {
  teamId: number;
  teamName: string;
  description: string;
  leaderId: number;
  createdAt: Date;
  updatedAt: Date;
  projectId: number;
}
