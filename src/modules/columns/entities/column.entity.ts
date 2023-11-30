import { Column } from '@prisma/client';

export class ColumnEntity implements Column {
  columnId: number;
  columnName: string;
  projectId: number;
  createdAt: Date;
  updatedAt: Date;
}
