import { Sprint } from '@prisma/client';

export class SprintEntity implements Sprint {
  createdAt: Date;
  updatedAt: Date;
  sprintId: number;
  title: string;
  term: Date;
  projectId: number;
}
