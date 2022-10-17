import React from "react";
import { MenuIcon, BlockIcon, ShareIcon, SaveIcon, CommentsIcon, WarningIcon } from './assets/index';

type TIconSizes = 8 | 16 | 24 | 32 | 40;

export enum EIcons {
    block = 'block',
    menu = 'menu',
    share = 'share',
    save = 'save',
    comments = 'comments',
    warning = 'warning'
}

interface IIconProps {
    name: EIcons,
}

function getIcon(name: EIcons) {
    switch (name) {
            case EIcons.block:
                        return <BlockIcon />;
            case EIcons.menu:
                        return <MenuIcon />;
            case EIcons.share:
                        return <ShareIcon />;
            case EIcons.save:
                        return <SaveIcon />;
            case EIcons.comments:
                        return <CommentsIcon />;
            case EIcons.warning:
                        return <WarningIcon />;
    }
}

export function Icon({ name }: IIconProps) {

    return (
        <>
            {getIcon(name)}
        </>
    );
}