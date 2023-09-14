import { Injectable } from '@nestjs/common';
import { AuthRepository } from './repositories/auth.repository';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async register(data: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.authRepository.register(data);
    return user;
  }

  async login(username: string, password: string): Promise<AuthUserDto> {
    const user = await this.authRepository.login(username, password);
    return user;
  }
}
