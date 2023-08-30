'use client';

import { CircularProgress } from '@nextui-org/react';
import { useEffect, useState } from 'react';

interface Params {
  playerId: number;
}

function UserDetailPage({ params }: { params: Params }): JSX.Element {
  const { playerId } = params;
  const [player, setPlayer] = useState();

  useEffect(() => {
    async function getPlayer() {
      const response = await fetch(
        `http://localhost:8080/api/player/${playerId}`
      );
      const data = await response.json();
      setPlayer(data);
    }

    getPlayer();
  }, []);

  if (player === undefined) {
    return <CircularProgress aria-label="Loading..." />;
  } else {
    return <p>{JSON.stringify(player)}</p>;
  }
}

export default UserDetailPage;
