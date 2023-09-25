import { Team } from '@prisma/client';

export class TeamEntity implements Team {
  teamId: number;
  teamName: string;
  description: string;
  leaderId: number;
  projectId: number;
  createdAt: Date;
  updatedAt: Date;
}
