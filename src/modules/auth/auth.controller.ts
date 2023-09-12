import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/register')
  register(@Body() data: CreateUserDto) {
    return this.authService.register(data);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(@Body() data: CreateUserDto) {
    return this.authService.login(data.username, data.password);
  }
}
