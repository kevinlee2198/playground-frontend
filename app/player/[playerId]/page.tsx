'use client';

import { CircularProgress } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface Params {
  playerId: number;
}

function UserDetailPage({ params }: { params: Params }): JSX.Element {
  const { playerId } = params;
  const [player, setPlayer] = useState();

  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/api/auth/signin?callbackUrl=/player/' + playerId);

    return <p>Signed in as</p>;
  }
  useEffect(() => {
    async function getPlayer() {
      const response = await fetch(
        `http://localhost:8080/api/player/${playerId}`,
        { credentials: 'include' }
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
