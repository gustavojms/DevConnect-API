import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TeamMembersService } from './team_members.service';
import { CreateTeamMemberDto } from './dto/create-team_member.dto';

@Controller('api/teams/:teamId/members')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  @Post()
  create(@Body() createTeamMemberDto: CreateTeamMemberDto) {
    return this.teamMembersService.create(createTeamMemberDto);
  }

  @Get()
  findAll(@Param('teamId') id: number) {
    return this.teamMembersService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamMembersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamMembersService.remove(+id);
  }
}
