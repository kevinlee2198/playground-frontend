import SportType from "@/common/constants/sport-type";
import BasketballGameBoxScores from "@/statistics/components/basketball-game-box-scores";
import Game from "../model/game";
import GameApiResponseFullDto from "../model/game-api-response-full-dto";

interface Props {
  game: GameApiResponseFullDto;
}

function GameStatisticTableFactory(props: Props) {
  const { game } = props;

  switch (game.sportType) {
    case SportType.BASKETBALL:
      return (
        <BasketballGameBoxScores
          game={Game.convertFromGameApiResponsePublicDto(game)}
        />
      );
    default:
      return null;
  }
}

export default GameStatisticTableFactory;