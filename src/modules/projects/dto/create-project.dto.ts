export class CreateProjectDto {
    projectId: number;
    title: string;
    description: string;
    projectOwner: number;
    parentProjectId: number;
    createdAt: Date;
    updatedAt: Date;
}
