import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { Icon, EIcons } from '../../../icons/Icon';
import { MenuListItem } from './MenuListItem';
import { Text, Ecolors } from '../../../Text/Text';

import styles from './menu.css';

export function Menu() {

    return (
        <div className={styles.menu}>
            <Dropdown
                isOpen={false}
                button={
                    <button className={styles.menuButton}>
                        <Icon name={EIcons.menu} />
                    </button>
                }
            >
                <div className={styles.dropdown}>
                    <MenuListItem postId='1234' />
                    <button className={styles.closeButton}>
                        <Text size={14} mobileSize={12} color={Ecolors.grey66}> Закрыть </Text>
                    </button>
                </div>
            </Dropdown>
        </div>
    );
}
