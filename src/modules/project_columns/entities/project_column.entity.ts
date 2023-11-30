import { ProjectColumn } from '@prisma/client';

export class ProjectColumnEntity implements ProjectColumn {
  projectColumnId: number;
  projectId: number;
  columnId: number;
  createdAt: Date;
  updatedAt: Date;
}
