import { convertPlayerApiResponseFullDtoToPlayer } from "@/player/model/player";
import {
  ageField,
  firstNameField,
  heightField,
  lastNameField,
  idField as playerIdField,
  weightField,
} from "@/player/model/player-fields";
import { redirect } from "next/navigation";
import { GraphQLResponse, query } from "../api/graphql-request";
import getPlaygroundServerSession from "../auth/get-playground-server-session";

/**
 * Gets the player of the current logged-in user
 * Should only be used by the server
 */
async function getCurrentPlayerServer() {
  const session = await getPlaygroundServerSession();
  if (!session) {
    return undefined;
  }

  const currentPlayerQuery = {
    currentPlayer: {
      [playerIdField]: true,
      [firstNameField]: true,
      [lastNameField]: true,
      [ageField]: true,
      [heightField]: true,
      [weightField]: true,
    },
  };

  const response: GraphQLResponse = await query(currentPlayerQuery);
  return response.data.player === undefined
    ? undefined
    : convertPlayerApiResponseFullDtoToPlayer(response.data.player);
}

/**
 * Gets the player of the current logged-in user
 * Should only be used by the server
 * Redirects to signin  if user is not signed in
 */
async function getCurrentPlayerServerWithRedirect() {
  const session = await getPlaygroundServerSession();
  if (!session) {
    redirect("api/auth/signin");
  }

  const currentPlayerQuery = {
    currentPlayer: {
      [playerIdField]: true,
      [firstNameField]: true,
      [lastNameField]: true,
      [ageField]: true,
      [heightField]: true,
      [weightField]: true,
    },
  };

  const response: GraphQLResponse = await query(currentPlayerQuery);
  return response.data.player === undefined
    ? undefined
    : convertPlayerApiResponseFullDtoToPlayer(response.data.player);
}

export { getCurrentPlayerServer, getCurrentPlayerServerWithRedirect };