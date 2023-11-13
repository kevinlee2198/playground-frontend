import { GameState } from '@/common/game-constants';
import SportType from '@/common/sport-types';
import TeamInstance from '@/models/team/team-instance';
import Game from '../base-game/game';
import GameApiResponseFullDto from '../base-game/game-api-response-full-dto';
import { TwoTeamGameTeamPosition } from '@/common/team-constants';

class TwoTeamGame extends Game {
  homeTeam: TeamInstance;

  awayTeam: TeamInstance;

  constructor(
    id: number,
    startDate: Date,
    sportType: SportType,
    gameState: GameState,
    homeTeam: TeamInstance,
    awayTeam: TeamInstance,
    endDate?: Date
  ) {
    const teamArray = [homeTeam, awayTeam].filter(
      (teamInstance) => teamInstance !== undefined
    );
    super(id, startDate, sportType, gameState, teamArray, endDate);
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  static convertFromGameApiResponsePublicDto(
    dto: GameApiResponseFullDto
  ): TwoTeamGame {
    const homeTeam = dto.team_instances.find(
      (team) => team.attributes.position === TwoTeamGameTeamPosition.HOME
    );
    const awayTeam = dto.team_instances.find(
      (team) => team.attributes.position === TwoTeamGameTeamPosition.AWAY
    );
    return new TwoTeamGame(
      dto.id,
      new Date(dto.start_date),
      dto.sport_type,
      dto.game_state,
      TeamInstance.convertFromTeamInstanceApiResponsePublicDto(homeTeam!),
      TeamInstance.convertFromTeamInstanceApiResponsePublicDto(awayTeam!),
      dto.end_date === undefined ? undefined : new Date(dto.end_date)
    );
  }
}

export default TwoTeamGame;
