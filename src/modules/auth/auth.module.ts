import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthRepository } from './repositories/auth.repository';
import { PrismaService } from 'src/database/prisma.service';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register(jwtConfig)],
  providers: [AuthService, JwtStrategy, AuthRepository, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
