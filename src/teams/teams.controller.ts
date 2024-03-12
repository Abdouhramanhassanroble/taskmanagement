import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsDTO } from './dto/team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async getTeams(): Promise<TeamsDTO[]> {
    return this.teamsService.getTeams();
  }
}
