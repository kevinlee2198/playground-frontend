"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { convertGameApiResponseFullDtoToGame } from "../model/game";
import GameApiResponseFullDto from "../model/game-api-response-full-dto";
import { convertGameToGameInput } from "../model/game-input";
import GameCreatorFactory from "./game-creator-factory";
import TwoTeamGameDetail from "./two-team-game-detail";

interface Props {
  game: GameApiResponseFullDto;
}

function GameReadEditSwitcher(props: Props) {
  const { game: gameApiResponse } = props;
  const game = convertGameApiResponseFullDtoToGame(gameApiResponse);
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <div className="grid grid-flow-row gap-y-10">
      <div className="col-span-full m-auto">
        <h1>Game</h1>
      </div>
      <Button onPress={toggleEditing}>{editing ? "Cancel" : "Edit"}</Button>
      {editing ? (
        <GameCreatorFactory gameInput={convertGameToGameInput(game)} />
      ) : (
        <TwoTeamGameDetail gameInput={convertGameToGameInput(game)} />
      )}
    </div>
  );
}

export default GameReadEditSwitcher;
