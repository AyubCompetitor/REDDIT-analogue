import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../icons';
import styles from './menu.css';

export function Menu() {

    return (
        <div className={styles.menu}>
            <Dropdown
                isOpen={false}
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                    <ul className={styles.dropdown}>
                        <li>listItem1</li>
                        <li>listItem2</li>
                        <li>listItem3</li>
                    </ul>
            </Dropdown>
        </div>
    );
}
