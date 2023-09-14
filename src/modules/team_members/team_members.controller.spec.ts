import { Test, TestingModule } from '@nestjs/testing';
import { TeamMembersController } from './team_members.controller';
import { TeamMembersService } from './team_members.service';

describe('TeamMembersController', () => {
  let controller: TeamMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamMembersController],
      providers: [TeamMembersService],
    }).compile();

    controller = module.get<TeamMembersController>(TeamMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
