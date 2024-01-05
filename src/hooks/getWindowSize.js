import { useEffect, useState } from 'react';

const useSize = () => {
  const [windowSize, setWindowSize] = useState(window.outerWidth);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize(window.outerWidth);
    };
    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;
