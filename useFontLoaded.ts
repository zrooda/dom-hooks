import { useLayoutEffect, useState } from "react";

export const useFontLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    if (document?.fonts) {
      document.fonts.ready.then(() => {
        setIsLoaded(true);
      });
    }
  }, []);

  return isLoaded;
};
