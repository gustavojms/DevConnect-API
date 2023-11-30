// import { ConflictException, Inject } from '@nestjs/common';
// import { ProjectColumnsInterfaceRepository } from './project_columns.interface.repository';
// import { PrismaService } from 'src/database/prisma.service';
// import { CreateProjectColumnDto } from '../dto/create-project_column.dto';

// export class ProjectColumnsRepository
//   implements ProjectColumnsInterfaceRepository
// {
//   constructor(@Inject(PrismaService) private prisma: PrismaService) {}

//   async create(
//     projectColumn: CreateProjectColumnDto,
//   ): Promise<CreateProjectColumnDto> {
//     const projectColumnAlreadyExists =
//       await this.prisma.projectColumn.findUnique({
//         where: {
//           projectId_columnId: {
//             projectId: projectColumn.projectId,
//             columnId: projectColumn.columnId,
//           },
//         },
//       });

//     if (projectColumnAlreadyExists) {
//       throw new ConflictException('Project column already exists');
//     }

//     const projectColumnCreated = await this.prisma.projectColumn.create({
//       data: {
//         projectId: projectColumn.projectId,
//         columnId: projectColumn.columnId,
//       },
//     });

//     return projectColumnCreated;
//   }

//   async findAll(projectId: number) {
//     const projectColumns = await this.prisma.projectColumn.findMany({
//       where: {
//         projectId: projectId,
//       },
//       select: {
//         project: {
//           select: {
//             title: true,
//             description: true,
//             columns: {
//               select: {
//                 column: {
//                   select: {
//                     columnName: true,
//                     columnId: true,
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//       distinct: ['projectId'],
//     });
//     return projectColumns;
//   }
// }
