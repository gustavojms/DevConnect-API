export class CreateProjectDto {
  projectId: number;
  title: string;
  description: string;
  public: boolean;
  projectOwner: number;
  parentProjectId: number;
  createdAt: Date;
  updatedAt: Date;
}
