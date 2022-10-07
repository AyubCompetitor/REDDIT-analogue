import React from "react";

interface IItem {
    text: string,
    id: string,
    className?: string,
    onClick: (id: string) => void,
    As?: 'a' | 'li' | 'button' | 'div',
    href?: string;
}

interface IGenericListProps {
    list: IItem[];
}

const NOOP = () => { };

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {
                list.map(({ As = 'div', text, className, onClick = NOOP, id, href }) => (
                    <As className={className}
                        onClick={() => onClick(id)}
                        key={id}
                        href={href}
                    >
                        {text}
                    </As>
                ))
            }
        </>
    )
} 