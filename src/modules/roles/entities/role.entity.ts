import { Role } from "@prisma/client";

export class RoleEntity implements Role {
    roleId: number;
    roleName: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
