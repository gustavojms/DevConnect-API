import { CreateColumnDto } from '../dto/create-column.dto';
import { UpdateColumnDto } from '../dto/update-column.dto';

export interface ColumnsInterfaceRepository {
  create(column: CreateColumnDto): Promise<CreateColumnDto>;
  findAll(): Promise<CreateColumnDto[]>;
  findOne(columnId: number): Promise<CreateColumnDto>;
  update(columnId: number, column: UpdateColumnDto): Promise<UpdateColumnDto>;
  remove(columnId: number): Promise<void>;
}
