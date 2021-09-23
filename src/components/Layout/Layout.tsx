import React, { FC } from 'react';
import Navbar from '@components/Navbar';

// const props: INavbarProps = {
//   items: [
//     { text: 'Home', to: '/' },
//     { text: 'Home', to: '/' },
//     { text: 'Home', to: '/' },
//   ]
// };

const items = [
    { text: 'Home', to: '/' },
    { text: 'Home', to: '/' },
    { text: 'Home', to: '/' },
];

const Layout: FC = ({ children }) => (
    <main className="w-screen h-screen bg-primary text-white">
        <Navbar items={items} />
        { children }
    </main>
);

export default Layout;
