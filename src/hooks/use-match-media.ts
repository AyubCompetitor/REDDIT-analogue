import { useLayoutEffect, useState } from "react";
import { IMediaQuery, IMatchedMedia } from './types'

export function useMatchMedia(queries: IMediaQuery, defaultValues: IMatchedMedia = []): IMatchedMedia {
    const initialValues = defaultValues.length
        ? defaultValues
        : Array(queries.length).fill(false);


    if (typeof window === 'undefined') return initialValues;

    const mediaQueryLists = queries.map(q => window.matchMedia(q));
    const getValue = (): IMatchedMedia => {

        const matchedQueries = mediaQueryLists.map(mql => mql.matches)

        return matchedQueries;
    }

    const [value, setValue] = useState(getValue);

    useLayoutEffect(() => {

        const handler = (): void => setValue(getValue);

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

        return (): void => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    }, []);

    return value;
}
