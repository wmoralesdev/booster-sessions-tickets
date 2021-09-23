import { INotificationProp } from '@interfaces/Notification/notification.prop';
import React, { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Notification.module.css';

const InfoIcon = () => <Icon className="text-2xl mr-3 text-green-500" icon={faExclamationCircle} />;
const ErrorIcon = () => <Icon className="text-2xl mr-3 text-red-500" icon={faTimesCircle} />;

const Notification: FC<INotificationProp> = ({ iconType, message, openDefault }) => {
    const [isOpen, setIsOpen] = useState(openDefault);

    useEffect(() => {
        setIsOpen(openDefault);
    }, [openDefault]);

    return (
        <div className={`${styles.notification} ${isOpen ? styles.show : ''} bg-white rounded-lg w-80 text-primary flex flex-row justify-start items-center px-4 py-3
        transition-all duration-500`}
        >
            <p>{ iconType === 'info' ? <InfoIcon /> : <ErrorIcon />}</p>
            <h1 className="text-sm font-medium">{ message }</h1>
            <span
                onClick={() => setIsOpen(!isOpen)}
                className="ml-auto font-bold h-6 w-6 text-center rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
                x
            </span>
        </div>
    );
};

export default Notification;
