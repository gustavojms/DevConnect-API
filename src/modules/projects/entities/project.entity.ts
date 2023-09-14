import { Project } from "@prisma/client";


export class ProjectEntity implements Project {
    projectId: number;
    title: string;
    description: string;
    projectOwner: number;
    parentProjectId: number;
    createdAt: Date;
    updatedAt: Date;
}
