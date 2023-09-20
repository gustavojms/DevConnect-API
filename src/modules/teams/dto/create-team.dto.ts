export class CreateTeamDto {
  teamId: number;
  teamName: string;
  description: string;
  leaderId: number;
  createdAt: Date;
  updatedAt: Date;
  projectId: number;
}
