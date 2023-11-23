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

  async findAll(teamId: number) {
    const teamMembers = await this.prisma.teamMember.findMany({
      where: {
        teamId: teamId,
      },
      select: {
        team: {
          select: {
            teamName: true,
            description: true,
            members: {
              select: {
                member: {
                  select: {
                    username: true,
                    userId: true,
                  },
                },
              },
            },
          },
        },
      },
      distinct: ['teamId'],
    });
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

  async update(
    teamId: number,
    teamMember: CreateTeamMemberDto[],
  ): Promise<void> {

    const existingTeam = await this.prisma.team.findMany({
      where: {
        teamId: teamId,
      },
    });

    if (!existingTeam) {
      throw new ConflictException('Team does not exist');
    }

    await this.prisma.teamMember.deleteMany({
      where: {
        teamId: teamId,
      },
    });

    for (const m of teamMember) {
      await this.prisma.teamMember.create({
        data: {
          memberId: m.memberId,
          teamId: teamId,
        },
      });
    }
  }
}
