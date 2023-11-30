import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateColumnDto } from '../dto/create-column.dto';
import { UpdateColumnDto } from '../dto/update-column.dto';
import { ColumnsInterfaceRepository } from './columns.interface.repository';

export class ColumnsRepository implements ColumnsInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(column: CreateColumnDto): Promise<CreateColumnDto> {
    const columnCreated = await this.prisma.column.create({
      data: {
        columnName: column.columnName,
        projectId: column.projectId,
      },
    });

    return columnCreated;
  }

  async findAll(): Promise<CreateColumnDto[]> {
    const columns = await this.prisma.column.findMany();

    return columns;
  }

  async findMany(ids: number[]): Promise<CreateColumnDto[]> {
    const columns = await this.prisma.column.findMany({
      where: {
        columnId: {
          in: ids,
        },
      },
    });

    return columns;
  }

  async findOne(columnId: number): Promise<CreateColumnDto> {
    const column = await this.prisma.column.findUnique({
      where: {
        columnId: columnId,
      },
    });

    return column;
  }

  async update(
    columnId: number,
    column: UpdateColumnDto,
  ): Promise<UpdateColumnDto> {
    const columnUpdated = await this.prisma.column.update({
      where: {
        columnId: columnId,
      },
      data: {
        columnName: column.columnName,
        projectId: +column.projectId,
        updatedAt: new Date(),
      },
    });

    return columnUpdated;
  }

  async remove(columnId: number): Promise<void> {
    await this.prisma.column.delete({
      where: {
        columnId: columnId,
      },
    });
  }
}
