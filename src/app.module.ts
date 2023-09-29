import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './database/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import { LikesModule } from './modules/likes/likes.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TeamMembersModule } from './modules/team_members/team_members.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { SprintModule } from './modules/sprint/sprint.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    TeamsModule,
    TeamMembersModule,
    ProjectsModule,
    SprintModule,
    TasksModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
