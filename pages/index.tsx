import React, { useState, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import NewWindow from 'react-new-window';
import Ticket from '../src/components/Ticket/Ticket';
import GitHub from '../src/components/Icons/GitHub/GitHub';

const Home: NextPage = () => {
  const [popUp, setPopUp] = useState(false);
  const [session, loading] = useSession();

  return (
    <Layout>
      <div className="w-full flex flex-col justify-around items-center space-y-10 my-10">
        <button className="mx-auto flex justify-center items-center text-primary bg-white rounded-lg shadow-lg px-4 py-2 space-x-3 
        transition-all hover:animate-pulse"
        onClick={ session ? () => signOut() : () => setPopUp(true)}>
          <GitHub />
          <span className="font-bold">{ !session ? "Sign In with GitHub" : "Sign Out" }</span>
        </button>
        <Ticket user={ session && session.user }/>
      </div>

      {popUp && !session ? (
        <NewWindow url="/sign-in" onUnload={() => setPopUp(false)} center="screen" />
      ) : null}
    </Layout>
  );
}

export default Home;
