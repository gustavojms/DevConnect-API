import { ConflictException, Inject } from '@nestjs/common';
import { TeamMembersInterfaceRepository } from './team_members.interface.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTeamMemberDto } from '../dto/create-team_member.dto';

export class TeamMembersRepository implements TeamMembersInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(teamMember: CreateTeamMemberDto): Promise<CreateTeamMemberDto> {
    const userAlreadyInTeam = await this.prisma.teamMember.findUnique({
      where: {
        memberId_teamId: {
          memberId: teamMember.memberId,
          teamId: teamMember.teamId,
        },
      },
    });

    if (userAlreadyInTeam) {
      throw new ConflictException('User already in team');
    }

    const teamMemberCreated = await this.prisma.teamMember.create({
      data: {
        memberId: teamMember.memberId,
        teamId: teamMember.teamId,
      },
    });

    return teamMemberCreated;
  }

  async findAll(): Promise<CreateTeamMemberDto[]> {
    const teamMembers = await this.prisma.teamMember.findMany();

    return teamMembers;
  }

  async findOne(teamMemberId: number): Promise<CreateTeamMemberDto> {
    const teamMember = await this.prisma.teamMember.findUnique({
      where: {
        memberId_teamId: {
          memberId: teamMemberId,
          teamId: teamMemberId,
        },
      },
    });

    return teamMember;
  }

  async remove(teamMemberId: number): Promise<void> {
    await this.prisma.teamMember.delete({
      where: {
        memberId_teamId: {
          memberId: teamMemberId,
          teamId: teamMemberId,
        },
      },
    });
  }
}