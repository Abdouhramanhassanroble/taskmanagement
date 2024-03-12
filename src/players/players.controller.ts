import { Controller, Get } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerDTO } from './dto/player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  async getPlayers(): Promise<PlayerDTO[]> {
    return this.playersService.getPlayers();
  }
}