import { Module } from '@nestjs/common';
import { TeamMembersService } from './team_members.service';
import { TeamMembersController } from './team_members.controller';
import { TeamMembersRepository } from './repositories/team_members.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TeamMembersController],
  providers: [TeamMembersService, TeamMembersRepository, PrismaService],
})
export class TeamMembersModule {}
