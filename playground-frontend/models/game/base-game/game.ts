import TeamInstance from '@/models/team/team-instance';
import GameApiResponseFullDto from './game-api-response-full-dto';
import GameApiRequestSaveDto from './game-api-request-save-dto';
import SportType from '@/common/constants/sport-type';
import { GameState } from '@/common/constants/game-constants';

class Game {
  id: number;

  startDate: Date;

  endDate?: Date;

  sportType: SportType;

  gameState: GameState;

  teamInstances: TeamInstance[];

  constructor(
    id: number,
    startDate: Date,
    sportType: SportType,
    gameState: GameState,
    teamInstances: TeamInstance[] = [],
    endDate?: Date
  ) {
    this.id = id;
    this.startDate = startDate;
    this.sportType = sportType;
    this.gameState = gameState;
    this.teamInstances = teamInstances;
    this.endDate = endDate;
  }

  static convertFromGameApiResponsePublicDto(
    dto: GameApiResponseFullDto
  ): Game {
    return new Game(
      dto.id,
      new Date(dto.start_date),
      dto.sport_type,
      dto.game_state,
      dto.team_instances.map((teamInstance) =>
        TeamInstance.convertFromTeamInstanceApiResponsePublicDto(teamInstance)
      ),
      dto.end_date === undefined ? undefined : new Date(dto.end_date)
    );
  }

  convertToGameApiRequestSaveDto(): GameApiRequestSaveDto {
    return {
      start_date: this.startDate.toISOString(),
      sport_type: this.sportType,
      team_instances: this.teamInstances.map((teamInstance) =>
        teamInstance.convertToTeamInstanceApiRequestSaveDto()
      ),
      end_date:
        this.endDate === undefined ? undefined : this.startDate.toISOString(),
    };
  }
}

export default Game;
