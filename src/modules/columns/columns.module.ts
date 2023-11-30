import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ColumnsRepository } from './repositories/columns.repository';

@Module({
  controllers: [ColumnsController],
  providers: [ColumnsService, ColumnsRepository, PrismaService],
})
export class ColumnsModule {}
