import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { AuthUserDto } from '../dto/auth-user.dto';

export interface AuthInterfaceRepository {
  register(data: CreateUserDto): Promise<CreateUserDto>;
  login(email: string, password: string): Promise<AuthUserDto>;
}
