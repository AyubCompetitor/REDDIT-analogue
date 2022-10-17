import React from "react";
import classNames from "classnames";
import styles from './text.css';


export enum Ecolors {
    black = 'black',
    orange = 'orange',
    green = 'green',
    white = 'white',
    greyF4 = 'greyF4',
    greyF3 = 'greyF3',
    greyD9 = 'greyD9',
    greyC4 = 'greyC4',
    grey99 = 'grey99',
    grey66 = 'grey66',
}

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div',
    children?: React.ReactNode,
    size: Tsizes,
    mobileSize?: Tsizes,
    tabletSize?: Tsizes,
    desctopSize?: Tsizes,
    color?: Ecolors,
    bold?: boolean;
}

export function Text(props: ITextProps) {

    const {
        As = 'span',
        color = Ecolors.black,
        bold = false,
        children,
        size,
        mobileSize,
        tabletSize,
        desctopSize
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        { [styles.bold]: bold },
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desctopSize}`]]: desctopSize }
    );

    return (
        <As className={classes}>
            {children}
        </As>
    )
}