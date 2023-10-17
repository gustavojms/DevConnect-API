import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ProjectInterfaceRepository } from './projects.interface.repository';

export class ProjectRepository implements ProjectInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(project: CreateProjectDto): Promise<CreateProjectDto> {
    const projectCreated = await this.prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        projectOwner: project.projectOwner,
        parentProjectId: project.parentProjectId,
      },
    });

    return projectCreated;
  }

  async findAll(): Promise<CreateProjectDto[]> {
    const projects = await this.prisma.project.findMany();

    return projects;
  }

  async findAllProjectsOfMember(userId: number): Promise<CreateProjectDto[]> {
    const projects = await this.prisma.teamMember.findMany({
      where: {
        memberId: userId,
      },
      include: {
        team: {
          include: {
            project: true,
          },
        },
      },
    });

    return projects.map((teamMember) => teamMember.team.project);
  }

  async findAllMembers(id: number) {
    const projects = await this.prisma.project.findMany({
      where: {
        projectId: id,
      },
      include: {
        team: {
          include: {
            members: true,
          },
        },
      },
    });

    const userIds = projects.flatMap((project) =>
      project.team.flatMap((team) =>
        team.members.map((member) => member.memberId),
      ),
    );

    const users = await this.prisma.user.findMany({
      where: {
        userId: {
          in: userIds,
        },
      },
      select: {
        userId: true,
        username: true,
      },
    });

    const userMap = new Map(users.map((user) => [user.userId, user.username]));

    const membersWithUsernames = projects.flatMap((project) =>
      project.team.flatMap((team) =>
        team.members.map((member) => ({
          userId: member.memberId,
          username: userMap.get(member.memberId),
        })),
      ),
    );

    return membersWithUsernames;
  }

  async findOne(id: number): Promise<CreateProjectDto> {
    const project = await this.prisma.project.findUnique({
      where: {
        projectId: id,
      },
    });

    return project;
  }

  async update(
    projectId: number,
    project: UpdateProjectDto,
  ): Promise<UpdateProjectDto> {
    const userId = Number(project.projectOwner);
    const projectUpdated = await this.prisma.project.update({
      where: {
        projectId: projectId,
      },
      data: {
        title: project.title,
        description: project.description,
        projectOwner: userId,
        updatedAt: new Date(),
      },
    });

    return projectUpdated;
  }

  async remove(projectId: number): Promise<void> {
    await this.prisma.project.delete({
      where: {
        projectId: projectId,
      },
    });
  }
}
