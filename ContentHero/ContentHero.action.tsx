import { useEffect, useRef, useState } from 'react';

export const useContentHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (ref?.current?.clientHeight) {
      setHeight(ref.current.clientHeight);
    }
  }, []);
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const onShowMore = () => setIsShowMore(true);
  return {
    height,
    ref,
    isShowMore,
    onShowMore,
  };
};
