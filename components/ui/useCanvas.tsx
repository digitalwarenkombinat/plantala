import { useState, useEffect, useRef } from 'react';

import { calculateImageCoordinates, calculateImageRotation, setImageValues, canvasHeight, canvasWidth } from './Utils';
import { IMedia } from '../store';
import useStore from "../store";

/* istanbul ignore next */
function drawPlants (context:CanvasRenderingContext2D, plant:IMedia, imageMultiplier: number) {
  const mediaPath = useStore.getState().mediaPath;
  const { amount, distance, rotation, step, scale, size } = setImageValues(plant, imageMultiplier);

  for (let imageNumber = 0; imageNumber < amount; imageNumber ++) {
    const { imageX, imageY } = calculateImageCoordinates(imageNumber, amount, distance, imageMultiplier);
    const { imageRotation } = calculateImageRotation(imageNumber, rotation, step);
  
    const image = new Image();

    image.onload = () => {
      //console.log(`name: ${plant.name}, imageNumber: ${imageNumber}, size: ${size}, scale: ${scale}, rotation: ${rotation}, imageX: ${imageX}, imageY: ${imageY}`);
      context.setTransform(scale, 0, 0, scale, imageX, imageY);
      context.rotate(imageRotation);
      context.drawImage(image, -size / 2, -size / 2, size, size);

      // context.lineWidth = 2;
      // context.strokeRect(-size / 2, -size / 2, size, size);
    }

    image.src = `/images/${mediaPath}${plant.source}`;
  }
}

/* istanbul ignore next */
export function useCanvas(){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [plants, setPlants] = useState([] as IMedia[]);
  const imageMultiplier = 5;

  useEffect(() => {
    if (plants.length > 0 && canvasRef.current) {
      const canvasObj = canvasRef.current;
      const context = canvasObj.getContext('2d');
      if (context) {
        context.setTransform(1,0,0,1,0,0);
        context.clearRect( 0,0, canvasWidth * imageMultiplier, canvasHeight * imageMultiplier );
        //drawCoordinateSystem(context);

        plants.forEach((plant) => {
          drawPlants(context, plant, imageMultiplier);
        });

      }
    }
  }, [plants, imageMultiplier]);

  return { setPlants, canvasRef, canvasWidth, canvasHeight };
}

