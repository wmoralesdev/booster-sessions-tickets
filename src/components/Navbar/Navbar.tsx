import React, { FC, useState } from 'react';
import { INavbarProps } from '@interfaces/Navbar/navbar.props';
import styles from './Navbar.module.css';

const Navbar: FC<INavbarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="w-full p-4 space-x-4 sticky z-10 flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="text-sm font-bold text-white lg:hover:animate-wiggle select-none">
                Made by
                <a className="ml-2 bg-white p-1 rounded-lg text-secondary shadow-lg cursor-pointer" href="https://github.com/wmoralesdev" target="_blank" rel="noreferrer">@wmoralesdev</a>
            </span>
            <div className={`${styles['menu-btn']} ${isOpen ? styles.open : ''}`}>
                <div className={styles['menu-btn-burger']} />
            </div>
        </div>
    );
};

export default Navbar;
