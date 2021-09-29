import { IMedia } from '../store';

export function setImageValues(element: IMedia) {
  const { amount = 4 + element.order * 2, rotation = 0, scale = 1, size = 300 } = element;

  const distance: number = getLayerDistance(element.distance, element.order);
  const step: number = Math.ceil(360 / amount);

  return { amount, distance, rotation, step, scale, size };
}

export function getLayerDistance(distance = 50, order: number) {
  const distanceDefault = 50;
  return distanceDefault * order * 3 + distance;
}

export function calculateImageCoordinates(
  context: CanvasRenderingContext2D,
  imageNumber: number,
  amount: number,
  distance: number,
) {
  const angle = (imageNumber / (amount / 2)) * Math.PI;
  const imageX = distance * Math.cos(angle) + context.canvas.width / 2;
  const imageY = distance * Math.sin(angle) + context.canvas.height / 2;

  return { imageX, imageY };
}

export function calculateImageRotation(imageNumber: number, rotation: number, step: number) {
  return rotation + (step * imageNumber * Math.PI) / 180;
}

export function drawCoordinateSystem(context: CanvasRenderingContext2D) {
  for (let x = 0.5; x < context.canvas.width; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, context.canvas.width);
  }
  for (let y = 0.5; y < context.canvas.height; y += 10) {
    context.moveTo(0, y);
    context.lineTo(context.canvas.height, y);
  }
  context.strokeStyle = '#aaa';
  context.stroke();

  context.beginPath();
  context.moveTo(0, context.canvas.height / 2);
  context.lineTo(context.canvas.width, context.canvas.height / 2);
  context.moveTo(context.canvas.width / 2, 0);
  context.lineTo(context.canvas.width / 2, context.canvas.height);
  context.strokeStyle = '#000';
  context.stroke();
}
