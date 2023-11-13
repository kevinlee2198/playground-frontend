import { GameState } from '@/common/game-constants';
import SportType from '@/common/sport-types';
import TeamInstanceApiResponseFullDto from '@/models/team/team-instance-api-response-full-dto';

interface GameApiResponseFullDto {
  id: number;

  start_date: string;

  sport_type: SportType;

  game_state: GameState;

  team_instances: TeamInstanceApiResponseFullDto[];

  end_date?: string;
}

export default GameApiResponseFullDto;
