import { IMedia } from '../store';

export const avatarCount = 5;

export const canvasWidth = 800;
export const canvasHeight = 800;

export function setImageValues(plant: IMedia, imageMultiplier: number) {
  const { 
    amount = 1 + (plant.order * 2),
    rotation = 45,
    scale = 1,
    size = 100 * imageMultiplier,
  } = plant;

  const distance: number = getLayerDistance(plant.distance, plant.order, imageMultiplier);
  const step: number = Math.ceil(360 / amount);

  return { amount, distance, rotation, step, scale, size };
}

export function orderSelectedPlant(plant: IMedia, plantOrder: number): IMedia {
  return { ...plant, selected: !plant.selected, order: plantOrder };
}

export function reorderSelectedPlant(plant: IMedia, isSelected: boolean): IMedia {
  return isSelected && plant.selected ? { ...plant, order: plant.order === 1 ? 1 : plant.order - 1 } : plant;
}

export function getLayerDistance(distance = 75, order:number, imageMultiplier: number) {
  return distance * order * imageMultiplier;
}

export function calculateImageCoordinates(imageNumber: number, amount: number, distance: number, imageMultiplier: number) {
  const angle = (imageNumber / (amount / 2)) * Math.PI;
  const imageX = distance * Math.cos(angle) + canvasWidth * imageMultiplier / 2;
  const imageY = distance * Math.sin(angle) + canvasHeight * imageMultiplier / 2;

  return { imageX, imageY };
}

export function calculateImageRotation(imageNumber: number, rotation: number, step: number) {
  const imageRotation = rotation + step * imageNumber * Math.PI / 180;

  return { imageRotation };
}

/* istanbul ignore next */
export function drawCoordinateSystem (context:CanvasRenderingContext2D) {
  for (let x = 0.5; x < canvasWidth; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, canvasWidth);
  }
  for (let y = 0.5; y < canvasHeight; y += 10) {
    context.moveTo(0, y);
    context.lineTo(canvasHeight, y);
  }
  context.strokeStyle = "#eee";
  context.stroke();

  context.beginPath();
  context.moveTo(0, canvasHeight/2);
  context.lineTo(canvasWidth, canvasHeight/2);
  context.moveTo(canvasWidth/2, 0);
  context.lineTo(canvasWidth/2, canvasHeight);
  context.strokeStyle = "#000";
  context.stroke();
}
