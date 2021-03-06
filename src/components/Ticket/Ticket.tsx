import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
    faYoutube, faInstagram, faFacebook, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import React, { FC } from 'react';
import Elaniin from '@components/icons/Elaniin/Elaniin';

import Image from 'next/image';

import cow from '@components/icons/Shapes/cow.svg';
import gitTree from '@components/icons/Shapes/git-tree.svg';
import zebra from '@components/icons/Shapes/zebra.svg';
import wave from '@components/icons/Shapes/wave.svg';

import Barcode from '@components/Barcode';

function setCustomBg(bg: string) {
    switch (bg) {
    case 'cow':
        return cow;
    case 'git-tree':
        return gitTree;
    case 'zebra':
        return zebra;
    case 'wave':
        return wave;
    default:
        return cow;
    }
}

const PulseTicket: FC<any> = ({ bg }) => {
    const bgSet = setCustomBg(bg);

    return (
        <div>
            <div
                className="w-64 h-102 border-4 border-white rounded-xl shadow-lg bg-white
                text-primary select-none hover:animate-wiggle relative transition-all"
            >
                <div className="absolute z-0 w-full h-full rounded-xl overflow-hidden opacity-10">
                    <Image src={bgSet} alt="bg" layout="fill" objectFit="cover" />
                </div>
                <div className="h-full relative z-10 top-0 flex flex-col justify-start rounded-xl">
                    <div className="w-20 h-2 border-2 border-primary rounded-lg mx-auto my-4 bg-primary" />
                    <div className="w-full h-full flex flex-col justify-between items-center space-y-4">
                        <div className="flex flex-row items-center space-x-3">
                            <div className="h-14 w-14 bg-primary rounded-full bg-opacity-60 animate-pulse" />
                            <div className="space-y-2">
                                <div className="w-28 h-2 bg-primary rounded-full bg-opacity-60 animate-pulse" />
                                <div className="w-20 h-2 bg-primary rounded-full bg-opacity-60 animate-pulse" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-28 h-2 bg-secondary rounded-full bg-opacity-60 animate-pulse" />
                            <div className="w-24 h-2 bg-secondary rounded-full bg-opacity-60 animate-pulse" />
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <div className="w-28 h-2 bg-primary rounded-full bg-opacity-60 animate-pulse" />
                            <div className="w-24 h-2 bg-primary rounded-full bg-opacity-60 animate-pulse" />
                            <div className="w-24 h-2 bg-primary rounded-full bg-opacity-60 animate-pulse" />
                            <div className="w-20 h-2 bg-secondary rounded-full bg-opacity-60 animate-pulse" />
                        </div>
                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-5 h-5 bg-secondary rounded-full bg-opacity-60 animate-pulse" />
                            <div className="w-5 h-5 bg-secondary rounded-full bg-opacity-60 animate-pulse" />
                            <div className="w-5 h-5 bg-secondary rounded-full bg-opacity-60 animate-pulse" />
                        </div>
                        <div className="mt-auto bg-primary w-full rounded-b-lg text-2xl text-white
                        font-bold text-center py-2 flex flex-col justify-center items-center"
                        >
                            <Elaniin />
                            <Barcode
                                value="Secret!"
                                options={
                                    {
                                        height: 28,
                                        width: 1,
                                        background: 'transparent',
                                        lineColor: 'white',
                                        displayValue: false,
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Ticket: FC<any> = ({ user, bg }) => {
    const username = user?.name.split('/');
    const bgSet = setCustomBg(bg);

    return (
        !user ? <PulseTicket bg={bg} />
            : (
                <div className="w-64 h-102 border-4 border-white rounded-xl shadow-lg flex flex-col bg-white text-primary select-none hover:animate-wiggle
                relative"
                >
                    <div className="absolute z-0 w-full h-full rounded-xl overflow-hidden opacity-10">
                        <Image src={bgSet} alt="bg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="h-full relative z-10 top-0 flex flex-col justify-start rounded-xl">
                        <div className="w-20 h-2 border-2 border-primary rounded-lg mx-auto my-4 bg-primary" />
                        <div className="w-full h-full flex flex-col justify-between items-center space-y-2">
                            <div className="space-y-6">
                                <div className="flex justify-center items-center space-y-2 space-x-3">
                                    <div className="h-16 w-16 bg-secondary rounded-full flex justify-center items-center">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            className="rounded-full h-14"
                                            src={user?.image}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h1 className="font-bold">{username[0]}</h1>
                                        <p className="text-xs italic font-medium">
                                            @
                                            {username[1]}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <p className="text-sm text-center text-secondary">
                                        Join us via
                                        <br />
                                        <strong>
                                            <Icon icon={faYoutube} />
                                            {' '}
                                            YouTube
                                        </strong>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center space-y-1">
                                    <p className="text-xs text-center px-4 font-bold">Algorithms and Data Structures</p>
                                    <p className="text-2xs text-center px-4 font-medium">Tuesday 21st, 2021</p>
                                    <p className="pt-1 text-xs text-center px-4 font-medium">
                                        Hosted by
                                        <br />
                                        <strong className="text-secondary">Walter Morales</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full space-x-4 text-center pt-6 select-all">
                                <a href="https://www.instagram.com/elaniin" target="_blank" rel="noreferrer" className="group">
                                    <Icon className="text-secondary h-5 transition-all group-hover:text-primary" icon={faInstagram} />
                                </a>
                                <a href="https://twitter.com/Elaniin" target="_blank" rel="noreferrer" className="group">
                                    <Icon className="text-secondary h-5 transition-all group-hover:text-primary" icon={faTwitter} />
                                </a>
                                <a href="https://www.facebook.com/Elaniin" target="_blank" rel="noreferrer" className="group">
                                    <Icon className="text-secondary h-5 transition-all group-hover:text-primary" icon={faFacebook} />
                                </a>
                            </div>
                            <div className="mt-auto bg-primary w-full rounded-b-lg text-2xl text-white
                            font-bold text-center py-2 flex flex-col justify-center items-center"
                            >
                                <Elaniin />
                                <Barcode
                                    value={username[1]}
                                    options={
                                        {
                                            height: 28,
                                            width: 1,
                                            background: 'transparent',
                                            lineColor: 'white',
                                            displayValue: false,
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
    );
};

export default Ticket;
