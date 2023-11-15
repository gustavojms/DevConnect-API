import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface UsersInterfaceRepository {
  /**
   * @description
   * Aqui vai a definição de todos os métodos que serão implementados
   */
  findOne(id: number): Promise<CreateUserDto>;
  findByEmail(email: string): Promise<CreateUserDto>;
  findByUsername(username: string): Promise<CreateUserDto>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto>;
  remove(id: number): Promise<void>;
}
