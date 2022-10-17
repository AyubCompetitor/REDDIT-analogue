import React, { useEffect, useState } from 'react';
import { IMenuVariablesProps } from './MenuVariables';
import { useMatchMedia } from '../../../../../hooks';
import { ViewMobileMenu } from './MenuVariables/MobileMenu';
import { ViewDesctopMenu } from './MenuVariables/DesktopMenu';

import styles from './menulistitem.css';

export function MenuListItem({ postId }: IMenuVariablesProps) {

    const queries = [
        '(max-width: 1023px)',
    ]

    const [mobile] = useMatchMedia(queries)

    return (
        <ul className={styles.menuItemsList}>
            {mobile ? <ViewMobileMenu postId={postId} /> : <ViewDesctopMenu postId={postId} />}
        </ul>
    );
}