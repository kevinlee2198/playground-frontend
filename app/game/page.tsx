'use client';

import { CircularProgress } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

function CreateGamePage(): JSX.Element {
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/api/auth/signin?callbackUrl=/player/' + playerId);

    return <p>Signed in as</p>;
  }
  return;
}
