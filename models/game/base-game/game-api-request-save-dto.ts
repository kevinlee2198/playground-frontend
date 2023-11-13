import SportType from '@/common/sport-types';
import TeamInstanceApiRequestSaveDto from '@/models/team/team-instance-api-request-save-dto';

interface GameApiRequestSaveDto {
  start_date: string;

  sport_type: SportType;

  team_instances: TeamInstanceApiRequestSaveDto[];

  end_date?: string;
}

export default GameApiRequestSaveDto;
