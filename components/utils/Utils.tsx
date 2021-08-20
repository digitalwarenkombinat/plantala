import useStore, { IMedia } from '../store';

const imageMultiplier = useStore.getState().imageMultiplier;

export const canvasWidth = 800;
export const canvasHeight = 800;

export function setImageValues(plant: IMedia) {
  const { amount = 4 + plant.order * 2, rotation = 0, scale = 1, level = 0, size = 100 * imageMultiplier } = plant;

  const distance: number = getLayerDistance(plant.distance, plant.order);
  const step: number = Math.ceil(360 / amount);

  return { amount, distance, rotation, step, scale, level, size };
}

export function getLayerDistance(distance = 50, order: number) {
  return distance * order * imageMultiplier;
}

export function calculateImageCoordinates(imageNumber: number, amount: number, distance: number) {
  const angle = (imageNumber / (amount / 2)) * Math.PI;
  const imageX = distance * Math.cos(angle) + (canvasWidth * imageMultiplier) / 2;
  const imageY = distance * Math.sin(angle) + (canvasHeight * imageMultiplier) / 2;

  return { imageX, imageY };
}

export function calculateImageRotation(imageNumber: number, rotation: number, step: number) {
  return rotation + (step * imageNumber * Math.PI) / 180;
}

export function drawCoordinateSystem(context: CanvasRenderingContext2D) {
  for (let x = 0.5; x < canvasWidth * imageMultiplier; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, canvasWidth * imageMultiplier);
  }
  for (let y = 0.5; y < canvasHeight * imageMultiplier; y += 10) {
    context.moveTo(0, y);
    context.lineTo(canvasHeight * imageMultiplier, y);
  }
  context.strokeStyle = '#aaa';
  context.stroke();

  context.beginPath();
  context.moveTo(0, (canvasHeight * imageMultiplier) / 2);
  context.lineTo(canvasWidth * imageMultiplier, (canvasHeight * imageMultiplier) / 2);
  context.moveTo((canvasWidth * imageMultiplier) / 2, 0);
  context.lineTo((canvasWidth * imageMultiplier) / 2, canvasHeight * imageMultiplier);
  context.strokeStyle = '#000';
  context.stroke();
}
