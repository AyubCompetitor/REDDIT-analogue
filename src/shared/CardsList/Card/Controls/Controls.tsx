import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { Actions } from './Actions';


export function Controls() {
    return (
        <div className={styles.controls}>
            <KarmaCounter />
            <CommentsButton />
            <Actions />
        </div>
    );
}
