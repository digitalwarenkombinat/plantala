import { useEffect, useRef } from 'react';

import useStore, { ELEMENT_SUFFIX, IMedia, VEKTOR_SUFFIX } from '../store';
import { calculateImageCoordinates, calculateImageRotation, setImageValues } from './Utils';

function drawElements(context: CanvasRenderingContext2D, element: IMedia) {
  const mediaPath = useStore.getState().mediaPath;
  const colorMode = useStore.getState().colorMode;
  const { amount, distance, rotation, step, scale, size } = setImageValues(element);
  const colorPath = colorMode ? ELEMENT_SUFFIX : VEKTOR_SUFFIX;

  for (let imageNumber = 0; imageNumber < amount; imageNumber++) {
    const { imageX, imageY } = calculateImageCoordinates(context, imageNumber, amount, distance);
    const imageRotation = calculateImageRotation(imageNumber, rotation, step);

    const image = new Image();

    image.onload = () => {
      // console.log(`name: ${element.name}, imageNumber: ${imageNumber}, size: ${size}, scale: ${scale}, rotation: ${rotation}, imageX: ${imageX}, imageY: ${imageY}`);
      context.setTransform(scale, 0, 0, scale, imageX, imageY);
      context.rotate(imageRotation);
      context.drawImage(image, -size / 2, -size / 2, size, size);

      // context.lineWidth = 2;
      // context.strokeRect(-size / 2, -size / 2, size, size);
    };

    image.src = `${process.env.pathPrefix}/images/${mediaPath}${element.source}${colorPath}`;
  }
}

export function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { colorMode, getSelectedElements, imageMultiplier, media } = useStore();

  useEffect(() => {
    if (media.length > 0 && canvasRef.current) {
      const canvasObj = canvasRef.current;
      const context = canvasObj.getContext('2d');
      if (context) {
        //useStore.subscribe(console.log);
        //context.canvas.height = window.innerHeight / 1.5;
        //context.canvas.width = window.innerWidth;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, context.canvas.width * imageMultiplier, context.canvas.height * imageMultiplier);
        // drawCoordinateSystem(context);
        getSelectedElements().forEach(element => drawElements(context, element));
      }
    }
  }, [colorMode, getSelectedElements, imageMultiplier, media]);

  return { canvasRef };
}
