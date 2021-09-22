import useAxios from 'axios-hooks';
import User from 'next-auth';
import React, { FC } from 'react';
import Elaniin from '../Icons/Elaniin/Elaniin';

const PulseTicket: FC = () =>
<div>
    <div className="w-64 h-96 border-2 border-white rounded-xl shadow-lg flex flex-col">
        <div className="w-20 h-2 border-2 border-white rounded-lg mx-auto my-4"></div>
        <div className="w-full h-full flex flex-col justify-between items-center space-y-4">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-36 h-2 bg-white rounded-full bg-opacity-60 animate-pulse"></div>
                <div className="h-20 w-20 bg-white rounded-full bg-opacity-60 animate-pulse"></div>
                <div className="w-20 h-2 bg-white rounded-full bg-opacity-60 animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="w-28 h-2 bg-white rounded-full bg-opacity-60 animate-pulse"></div>
                <div className="w-24 h-2 bg-white rounded-full bg-opacity-60 animate-pulse"></div>
            </div>
            <div className="w-16 h-2 bg-white rounded-full bg-opacity-60 animate-pulse"></div>
            <div className="mt-auto bg-white w-full rounded-b-lg text-2xl text-primary font-bold text-center py-2 flex justify-center items-center space-x-3">
                <Elaniin/>
                <div className="w-32 h-6 bg-primary rounded-full bg-opacity-60 animate-pulse"></div>
            </div>
        </div>
    </div>
</div>

const Ticket: FC<any> = ({user}) => {
    const username = user?.name.split('/');

    return (
        !user ? <PulseTicket/> :
        <div className="w-64 h-96 border-2 border-white rounded-xl shadow-lg flex flex-col">
            <div className="w-20 h-2 border-2 border-white rounded-lg mx-auto my-4"></div>
            <div className="w-full h-full flex flex-col justify-between items-center space-y-2">
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="font-bold">{ username[0] }</h1>
                    <img className="rounded-full h-14"
                    src={user?.image} alt="" />
                    <p className="text-xs italic font-medium">@{ username[1] }</p>
                </div>
                <div className="mt-auto bg-white w-full rounded-b-lg text-2xl text-primary font-bold text-center py-2 flex justify-center space-x-3">
                    <Elaniin/>
                    <span>#000001</span>
                </div>
            </div>
        </div>
    );
}

export default Ticket;