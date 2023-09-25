export class CreateTeamDto {
  teamId: number;
  teamName: string;
  description: string;
  leaderId: number;
  projectId: number;
  createdAt: Date;
  updatedAt: Date;
}
