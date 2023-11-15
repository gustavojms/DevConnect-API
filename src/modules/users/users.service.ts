import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  findAll() {
    const allUser = this.userRepository.findAll();
    return allUser;
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  findByEmail(email: string) {
    const user = this.userRepository.findByEmail(email);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }
}
