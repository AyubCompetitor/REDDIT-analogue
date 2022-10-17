import React from "react";
import { IMenuVariablesProps } from "./index";
import { EIcons, Icon } from "../../../../../icons/Icon";
import { Ecolors, Text } from "../../../../../Text/Text";

import styles from '../menulistitem.css';

export function ViewDesctopMenu(props: IMenuVariablesProps) {

    const { postId } = props;

    return (
        <>
            <li className={styles.menuItem}>
                <Icon name={EIcons.comments} />
                <Text size={12} color={Ecolors.grey99} desctopSize={14}> Комментарии </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem}>
                <Icon name={EIcons.share} />
                <Text size={12} color={Ecolors.grey99} desctopSize={14}> Поделиться </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <Icon name={EIcons.block} />
                <Text size={12} color={Ecolors.grey99} desctopSize={14}> Скрыть </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem}>
                <Icon name={EIcons.save} />
                <Text size={12} color={Ecolors.grey99} desctopSize={14}> Сохранить </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem}>
                <Icon name={EIcons.warning} />
                <Text size={12} color={Ecolors.grey99} desctopSize={14}> Пожаловаться </Text>
            </li>
        </>
    );
}