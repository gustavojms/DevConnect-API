import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
