import { useLayoutEffect, useState } from "react";

export const useFontLoaded = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect(() => {
        (async () => {
            const ready = await document.fonts.ready;
            setIsLoaded(ready);
        })();
    }, []);

    return isLoaded;
};
