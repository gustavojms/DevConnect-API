import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';

export interface TeamsInterfaceRepository {
  create(team: CreateTeamDto): Promise<CreateTeamDto>;
  findAll(): Promise<CreateTeamDto[]>;
  findOne(teamId: number): Promise<CreateTeamDto>;
  update(teamId: number, team: UpdateTeamDto): Promise<UpdateTeamDto>;
  remove(teamId: number): Promise<void>;
}
