export class CreateProjectDto {
  projectId: number;
  title: string;
  description: string;
  isPublic: boolean;
  projectOwner: number;
  parentProjectId: number;
  createdAt: Date;
  updatedAt: Date;
}
