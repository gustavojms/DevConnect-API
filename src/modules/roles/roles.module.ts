import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { RolesRepository } from './repositories/roles.repository';

@Module({
  controllers: [RolesController],
  providers: [RolesService, PrismaService, RolesRepository],

})

export class RolesModule {}
