import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ TeamsModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
