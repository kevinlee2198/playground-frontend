import Page from '@/common/page/page';
import QueryFilter from '@/common/search/query-filter';
import QueryOperator from '@/common/search/query-operator';
import Player from '@/models/player/player';
import PlayerApiResponseFullDto from '@/models/player/player-api-response-full-dto';
import PlayerApiRequestSaveDto from '@/models/player/player-api-response-full-dto';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

function HomePage(): JSX.Element {
  // const { data: session, status } = useSession();

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Playground</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        Stream and Share Your Sports
      </span>
      {/* {session ? <p>Logged In</p> : <p>Not logged in</p>} */}
      <p className="desc text-center">Stuff</p>
    </section>
  );
}

// async function SignedInHomePage(session: Session): JSX.Element {
//   const player = await getCurrentLoggedInPlayer(
//     session.user.token_set.id_token!
//   );
//   return <></>
// }

// async function getCurrentLoggedInPlayer(idToken: string): Promise<Player> {
//   const headers = {
//     Authorization: 'Bearer ' + idToken,
//   };
//   const player: PlayerApiResponseFullDto = await fetch(
//     process.env.SERVER_URL + '/api/player/personal',
//     {
//       headers,
//     }
//   );

//   return Player.convertFromPlayerApiResponseFullDto(player);
// }

// async function getUpcomingGames(playerId: number, idToken: string) {
//   const currentDay = new Date();
//   currentDay.setUTCHours(0, 0, 0, 0);
//   const dateFilter = new QueryFilter("startDate", QueryOperator.GREATER_THAN_OR_EQUALS, currentDay.toISOString());
//   const playerFilter = new QueryFilter("playerId", QueryOperator.IN, '', )
//   const headers = {
//     Authorization: 'Bearer ' + idToken,
//   };

//   const games: Page<>
// }

// function UnsignedInHomePage(): JSX.Element {}

export default HomePage;
