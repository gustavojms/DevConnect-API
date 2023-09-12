import { PrismaService } from 'src/database/prisma.service';
import { UsersInterfaceRepository } from './users.interface.repository';
import { ConflictException, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

/**
 * @description
 * Aqui vai todos os métodos que serão implementados
 */
export class UsersRepository implements UsersInterfaceRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<CreateUserDto> {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (userExists) {
      throw new ConflictException('Usuário já existe.');
    }

    const userCreated = await this.prisma.user.create({
      data: {
        ...user,
      },
    });

    return userCreated;
  }

  async login(user: CreateUserDto): Promise<CreateUserDto> {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (!userExists) {
      throw new ConflictException('Usuário não existe.');
    }

    return userExists;
  }

  async findOne(id: number): Promise<CreateUserDto> {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new ConflictException('Usuário não existe.');
    }

    return userExists;
  }

  async findByEmail(email: string): Promise<CreateUserDto> {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!userExists) {
      throw new ConflictException('Usuário não existe.');
    }

    return userExists;
  }

  async findByUsername(username: string): Promise<CreateUserDto> {
    const userExists = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (!userExists) {
      throw new ConflictException('Usuário não existe.');
    }

    return userExists;
  }
}
