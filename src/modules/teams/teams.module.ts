import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { PrismaService } from 'src/database/prisma.service';
import { TeamsRepository } from './repositories/teams.repository';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService, TeamsRepository, PrismaService],
})
export class TeamsModule {}
