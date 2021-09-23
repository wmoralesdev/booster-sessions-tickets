import type { NextPage } from 'next';
import NewWindow from 'react-new-window';
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/client';
import Notification from '@components/Notification';
import Layout from '@components/Layout';
import Ticket from '@components/Ticket';
import GitHub from '@components/icons/GitHub/GitHub';

import Image from 'next/image';

import cow from '@components/icons/Shapes/cow.svg';
import gitTree from '@components/icons/Shapes/git-tree.svg';
import zebra from '@components/icons/Shapes/zebra.svg';
import wave from '@components/icons/Shapes/wave.svg';

const Home: NextPage = () => {
    const [popUp, setPopUp] = useState(false);
    const [provider, setProvider] = useState('github');
    const [session] = useSession();
    const [key, setKey] = useState('');

    const designs = [
        { pattern: cow, key: 'cow' },
        { pattern: gitTree, key: 'git-tree' },
        { pattern: zebra, key: 'zebra' },
        { pattern: wave, key: 'wave' },
    ];

    return (
        <Layout>
            <div className="w-full flex flex-col justify-around items-center space-y-5 my-5">
                <div className="space-y-2 mb-4 lg:mb-10">
                    <button
                        type="button"
                        className="w-64 h-12 mx-auto flex justify-center items-center text-primary bg-white rounded-lg shadow-lg px-4 py-2 space-x-3
                        transition-all hover:animate-wiggle"
                        onClick={session ? () => signOut() : () => { setPopUp(true); setProvider('github'); }}
                    >
                        <GitHub />
                        <span className="font-bold">{ !session ? 'Sign In with GitHub' : session!.user!.name!.split('/')[1] as string }</span>
                    </button>
                </div>
                <div className="flex flex-col items-center lg:space-y-4">
                    <div className="w-full h-20 flex flex-wrap justify-center space-x-4 lg:h-28">
                        {
                            designs.map((design) => (
                                <div
                                    className="relative w-14 h-14 border-4 border-white rounded-xl
                                    lg:hover:h-24 lg:hover:w-24 transition-all duration-700 cursor-pointer lg:w-20 lg:h-20"
                                    key={design.key}
                                    onClick={() => setKey(design.key)}
                                >
                                    <Image
                                        className="rounded-md"
                                        src={design.pattern}
                                        alt="bg-selection"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <Ticket user={session && session.user} bg={key} />
                </div>
            </div>

            {popUp && !session ? (
                <NewWindow features={{ width: 380, height: 380, center: 'screen' }} url={`/sign-in/${provider}`} onUnload={() => setPopUp(false)} center="screen" />
            ) : null}

            <Notification iconType="info" message="Signed In!" openDefault={session != null} />
        </Layout>
    );
};

export default Home;
