import { convertPlayerApiResponseFullDtoToPlayer } from "@/player/model/player";
import { Button, Input } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import {
  attributesField,
  descriptionField,
  nameField,
  playerIdsField,
} from "../model/team-instance-fields";
import TeamInstanceInput from "../model/team-instance-input";
import TeamInstanceTable from "./team-instance-table";

interface Props {
  teamInstance: TeamInstanceInput;
  setTeamInstance: Dispatch<SetStateAction<TeamInstanceInput>>;
}

function TeamInstanceCreator(props: Props): JSX.Element {
  const { teamInstance, setTeamInstance } = props;
  const id = teamInstance.id;
  let playerIds = teamInstance.players.map((player) => player.id).toString();

  function setName(name: string) {
    setTeamInstance((teamInstance) => {
      return {
        ...teamInstance,
        name,
      };
    });
  }

  function setDescription(description: string) {
    setTeamInstance((teamInstance) => {
      return {
        ...teamInstance,
        description,
      };
    });
  }

  const [currentPlayerId, setCurrentPlayerId] = useState<string | undefined>();

  async function handleAddPlayer() {
    // check that the player id is defined
    if (!currentPlayerId) {
      throw new Error("Player ID is required");
    }

    // first check if the id has been added already
    for (const player of teamInstance.players) {
      if (player.id === Number.parseInt(currentPlayerId)) {
        throw new Error(
          "Player " + currentPlayerId + " has already been added"
        );
      }
    }

    const playerId = parseInt(currentPlayerId);
    const response = await fetch(`/api/player/${playerId}`);
    const graphqlData = await response.json();
    const player = convertPlayerApiResponseFullDtoToPlayer(
      graphqlData.response.data.player
    );

    const newPlayerArray = [...teamInstance.players, player];
    setTeamInstance((teamInstance) => {
      return {
        ...teamInstance,
        players: newPlayerArray,
      };
    });

    setCurrentPlayerId(undefined);
    playerIds = newPlayerArray.map((player) => player.id).toString();
  }

  function handleDeletePlayer(playerId: number) {
    setTeamInstance((teamInstance) => {
      const updatedPlayers = teamInstance.players.filter(
        (player) => player.id !== playerId
      );
      playerIds = updatedPlayers.map((player) => player.id).toString();
      return {
        ...teamInstance,
        players: updatedPlayers,
      };
    });
  }

  return (
    <div>
      <Input
        className="border-3"
        id={`${nameField}[${id}]`}
        name={`${nameField}[${id}]`}
        label="Name"
        value={teamInstance.name || ""}
        onValueChange={setName}
        isRequired
      />
      <Input
        className="border-3"
        id={`${descriptionField}[${id}]`}
        name={`${descriptionField}[${id}]`}
        label="Description"
        value={teamInstance.description || ""}
        onValueChange={setDescription}
      />
      <input
        id={`${playerIdsField}[${id}]`}
        name={`${playerIdsField}[${id}]`}
        value={playerIds}
        hidden
      />
      <input
        id={`${attributesField}[${id}]`}
        name={`${attributesField}[${id}]`}
        value={JSON.stringify(teamInstance.attributes)}
        hidden
      />
      <Input
        label="Add Player"
        placeholder="Enter the Player ID"
        value={currentPlayerId || ""}
        onValueChange={setCurrentPlayerId}
      />
      <Button
        color="primary"
        variant="bordered"
        isDisabled={currentPlayerId === undefined}
        onPress={handleAddPlayer}
      >
        Add Player
      </Button>
      <TeamInstanceTable
        players={teamInstance.players}
        deletePlayer={handleDeletePlayer}
      />
    </div>
  );
}

export default TeamInstanceCreator;
