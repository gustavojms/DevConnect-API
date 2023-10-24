import { Project } from '@prisma/client';

export class ProjectEntity implements Project {
  projectId: number;
  title: string;
  description: string;
  public: boolean;
  projectOwner: number;
  parentProjectId: number;
  createdAt: Date;
  updatedAt: Date;
}
