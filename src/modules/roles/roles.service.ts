import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RolesRepository } from './repositories/roles.repository';


@Injectable()
export class RolesService {
  constructor(private rolesRepository: RolesRepository) {}

  async create(createRoleDto: CreateRoleDto) {
    const roles = await this.rolesRepository.create(createRoleDto);
    return roles;
  }

  async findAll() {
    const roles = await this.rolesRepository.findAll();
    return roles;
  }

  async findOne(id: number) {
    const roles = await this.rolesRepository.findOne(id);
    return roles;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const roles = await this.rolesRepository.update(id, updateRoleDto);
    return roles;
  }

  async remove(id: number) {
    await this.rolesRepository.remove(id);
  }
}