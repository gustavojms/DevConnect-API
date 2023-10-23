import { CreateRoleDto } from "../dto/create-role.dto";
import { UpdateRoleDto } from "../dto/update-role.dto";



export interface RolesInterfaceRepository {
    create(role: CreateRoleDto): Promise<CreateRoleDto>;
    findAll(): Promise<CreateRoleDto[]>;
    findOne(id: number): Promise<CreateRoleDto>;
    update(id: number, role: CreateRoleDto): Promise<UpdateRoleDto>;
    remove(id: number): Promise<void>;
}