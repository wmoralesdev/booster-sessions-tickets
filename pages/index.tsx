import React, { useState, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import NewWindow from 'react-new-window';
import Ticket from '../src/components/Ticket/Ticket';
import GitHub from '../src/components/Icons/GitHub/GitHub';
import GitLab from '../src/components/Icons/GitLab/GitLab';

const Home: NextPage = () => {
  const [popUp, setPopUp] = useState(false);
  const [provider, setProvider] = useState('github');
  const [session, loading] = useSession();

  return (
    <Layout>
      <div className="w-full flex flex-col justify-around items-center space-y-10 my-10">
        <div className="space-y-2">
          <button className="w-64 h-12 mx-auto flex justify-center items-center text-primary bg-white rounded-lg shadow-lg px-4 py-2 space-x-3 
          transition-all hover:animate-pulse"
          onClick={ session ? () => signOut() : () => { setPopUp(true); setProvider('github'); }}>
            <GitHub />
            <span className="font-bold">{ !session ? "Sign In with GitHub" : session!.user!.name!.split('/')[1] as string }</span>
          </button>
          <button className="w-64 h-12 mx-auto flex justify-center items-center text-primary bg-white rounded-lg shadow-lg px-4 py-2 space-x-3 
          transition-all hover:animate-pulse"
          onClick={ session ? () => signOut() : () => { setPopUp(true); setProvider('gitlab'); }}>
            <GitLab />
            <span className="font-bold">{ !session ? "Sign In with GitLab" : session!.user!.name!.split('/')[1] as string }</span>
          </button>
        </div>
        <Ticket user={ session && session.user }/>
      </div>

      {popUp && !session ? (
        <NewWindow url={`/sign-in/${provider}`} onUnload={() => setPopUp(false)} center="screen" />
      ) : null}
    </Layout>
  );
}

export default Home;
