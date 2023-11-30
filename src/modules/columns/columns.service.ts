import { Injectable } from '@nestjs/common';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { ColumnsRepository } from './repositories/columns.repository';

@Injectable()
export class ColumnsService {
  constructor(private columnsRepository: ColumnsRepository) {}

  create(createColumnDto: CreateColumnDto) {
    return this.columnsRepository.create(createColumnDto);
  }

  findAll() {
    return this.columnsRepository.findAll();
  }

  findOne(id: number) {
    return this.columnsRepository.findOne(id);
  }

  update(id: number, updateColumnDto: UpdateColumnDto) {
    return this.columnsRepository.update(id, updateColumnDto);
  }

  remove(id: number) {
    return this.columnsRepository.remove(id);
  }
}
