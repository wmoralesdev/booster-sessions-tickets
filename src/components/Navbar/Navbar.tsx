import React, { FC, useState } from 'react';
import { INavbarProps } from '../../interfaces/Navbar/navbar.props';
import styles from './Navbar.module.css'

const Navbar: FC<INavbarProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full p-4 space-x-4 sticky" 
        onClick={() => setIsOpen(!isOpen)}>
            <div className={ `${styles['menu-btn']} ${isOpen ? styles["open"] : ""}` }>
                <div className={ styles['menu-btn-burger'] }></div>
            </div>
        </div>
    );
}

export default Navbar;
