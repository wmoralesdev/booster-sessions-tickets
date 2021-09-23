import type { NextPage } from 'next';
import NewWindow from 'react-new-window';
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/client';
import Notification from '@components/Notification';
import Layout from '@components/Layout';
import Ticket from '@components/Ticket';
import GitHub from '@components/icons/GitHub/GitHub';

const Home: NextPage = () => {
    const [popUp, setPopUp] = useState(false);
    const [provider, setProvider] = useState('github');
    const [session] = useSession();

    return (
        <Layout>
            <div className="w-full flex flex-col justify-around items-center space-y-5 my-5">
                <div className="space-y-2 mb-10">
                    <button
                        type="button"
                        className="w-64 h-12 mx-auto flex justify-center items-center text-primary bg-white rounded-lg shadow-lg px-4 py-2 space-x-3
                        transition-all hover:animate-pulse"
                        onClick={session ? () => signOut() : () => { setPopUp(true); setProvider('github'); }}
                    >
                        <GitHub />
                        <span className="font-bold">{ !session ? 'Sign In with GitHub' : session!.user!.name!.split('/')[1] as string }</span>
                    </button>
                </div>
                <Ticket user={session && session.user} />
            </div>

            {popUp && !session ? (
                <NewWindow url={`/sign-in/${provider}`} onUnload={() => setPopUp(false)} center="screen" />
            ) : null}

            <Notification iconType="info" message="Signed In!" openDefault={session != null} />
        </Layout>
    );
};

export default Home;
