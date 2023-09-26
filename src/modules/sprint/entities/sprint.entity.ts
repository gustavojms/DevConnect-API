import { Sprint } from "@prisma/client";

export class SprintEntitity implements Sprint{
    sprintId: number;
    title: string;
    term: Date;
}