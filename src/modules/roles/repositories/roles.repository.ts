import { PrismaService } from "src/database/prisma.service";
import { RolesInterfaceRepository } from "./roles.interface.repository";
import { Inject } from "@nestjs/common";
import { CreateRoleDto } from "../dto/create-role.dto";
import { UpdateRoleDto } from "../dto/update-role.dto";



export class RolesRepository implements RolesInterfaceRepository {
    constructor(@Inject(PrismaService) private prisma: PrismaService) {}

    async create(role: CreateRoleDto): Promise<CreateRoleDto> {
        const userId = Number(role.userId);
        const roleCreated = await this.prisma.role.create({
            data: {
                roleName: role.roleName,
                userId: userId,
            }
        });

        return roleCreated;
    }

    async findAll(): Promise<CreateRoleDto[]> {
        const roles = await this.prisma.role.findMany({
            include: {
                User: {
                    select: {
                        username: true,
                    }
                }
            }
        });

        return roles;
    }

    async findOne(id: number): Promise<CreateRoleDto> {
        const role = await this.prisma.role.findUnique({
            where: {
                roleId: id
            },
            include : {
                User: {
                    select: {
                        username: true,
                        email: true,

                    }
                }
            }
        });

        return role;
    }


    async update(id: number, role: UpdateRoleDto): Promise<UpdateRoleDto> {
        const roleUpdated = await this.prisma.role.update({
            where: {
                roleId: id
            },
            data: {
                roleName: role.roleName,
                userId: role.userId,
                updatedAt: new Date(),
            }
        });

        return roleUpdated;
    }

    async remove(id: number): Promise<void> {
        await this.prisma.role.delete({
            where: {
                roleId: id
            }
        });
    }
}