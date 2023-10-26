import { Inject } from '@nestjs/common';
import { TeamsInterfaceRepository } from './teams.interface.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';

export class TeamsRepository implements TeamsInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(team: CreateTeamDto): Promise<CreateTeamDto> {
    const teamCreated = await this.prisma.team.create({
      data: {
        teamName: team.teamName,
        description: team.description,
        leaderId: team.leaderId,
        projectId: team.projectId,
      },
    });

    return teamCreated;
  }

  async findAll(): Promise<CreateTeamDto[]> {
    const teams = await this.prisma.team.findMany();

    return teams;
  }

  async findOne(teamId: number): Promise<CreateTeamDto> {
    const team = await this.prisma.team.findUnique({
      where: {
        teamId: teamId,
      },
    });

    return team;
  }

  async update(teamId: number, team: UpdateTeamDto): Promise<UpdateTeamDto> {
    const teamUpdated = await this.prisma.team.update({
      where: {
        teamId: teamId,
      },
      data: {
        teamName: team.teamName,
        description: team.description,
        leaderId: team.leaderId,
        projectId: +team.projectId,
        updatedAt: new Date(),
      },
    });

    return teamUpdated;
  }

  async remove(teamId: number): Promise<void> {
    await this.prisma.team.delete({
      where: {
        teamId: teamId,
      },
    });
  }
}
