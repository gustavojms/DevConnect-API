import { Inject, UnauthorizedException } from '@nestjs/common';
import { AuthInterfaceRepository } from './auth.interface.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/modules/users/repositories/users.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthUserDto } from '../dto/auth-user.dto';

export class AuthRepository implements AuthInterfaceRepository {
  constructor(
    @Inject(PrismaService) private prisma: PrismaService,
    private userRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async register(data: CreateUserDto): Promise<CreateUserDto> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    const userAlreadyExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExists) {
      throw new Error('Usuário já existe.');
    }

    const user = await this.prisma.user.create({
      data: {
        ...data,
      },
    });

    return user;
  }

  async login(username: string, password: string): Promise<AuthUserDto> {
    const user = await this.userRepository.findByUsername(username);
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const payload = {
      sub: user.userId,
      username: user.username,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      payload
    };
  }
}
