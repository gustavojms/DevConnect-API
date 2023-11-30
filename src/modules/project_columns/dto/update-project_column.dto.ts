import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectColumnDto } from './create-project_column.dto';

export class UpdateProjectColumnDto extends PartialType(
  CreateProjectColumnDto,
) {
  projectId: number;
  columnId: number;
  createdAt: Date;
  updatedAt: Date;
}
