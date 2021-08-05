import React, {useState, useEffect, useRef} from 'react'
import { CardMedia } from '@material-ui/core'

interface ICardMediaProp {
  className: string,
  image: string,
  title: string,
}

export default function LazyCardMedia({ className, image, title }: ICardMediaProp) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setVisible(true);
        }
      });
      observer.observe(placeholderRef.current);
    }
  }, [isVisible, placeholderRef]);

  return (isVisible
    ? 
    <CardMedia
      className={className}
      image={image}
      title={title}
    />
    : 
    <div className={className} ref={placeholderRef} />
  );
}
