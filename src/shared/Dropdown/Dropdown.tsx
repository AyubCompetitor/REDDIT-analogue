import React, { useEffect, useState } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
    button: React.ReactNode,
    children: React.ReactNode,
    isOpen?: boolean,
    onOpen?: () => void,
    onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
    
    useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

    const handleOpen = () => {
        if(isOpen === undefined) setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className={styles.container}>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
