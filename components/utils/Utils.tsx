import useStore, { IMedia } from '../store';

const imageMultiplier = useStore.getState().imageMultiplier;

export function setImageValues(element: IMedia) {
  const { amount = 4 + element.order * 2, rotation = 0, scale = 1, size = 100 * imageMultiplier } = element;

  const distance: number = getLayerDistance(element.distance, element.order);
  const step: number = Math.ceil(360 / amount);

  return { amount, distance, rotation, step, scale, size };
}

export function getLayerDistance(distance = 60, order: number) {
  return distance * order * imageMultiplier;
}

export function calculateImageCoordinates(
  context: CanvasRenderingContext2D,
  imageNumber: number,
  amount: number,
  distance: number,
) {
  const angle = (imageNumber / (amount / 2)) * Math.PI;
  const imageX = distance * Math.cos(angle) + (context.canvas.width * imageMultiplier) / 2;
  const imageY = distance * Math.sin(angle) + (context.canvas.height * imageMultiplier) / 2;

  return { imageX, imageY };
}

export function calculateImageRotation(imageNumber: number, rotation: number, step: number) {
  return rotation + (step * imageNumber * Math.PI) / 180;
}

export function drawCoordinateSystem(context: CanvasRenderingContext2D) {
  for (let x = 0.5; x < context.canvas.width * imageMultiplier; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, context.canvas.width * imageMultiplier);
  }
  for (let y = 0.5; y < context.canvas.height * imageMultiplier; y += 10) {
    context.moveTo(0, y);
    context.lineTo(context.canvas.height * imageMultiplier, y);
  }
  context.strokeStyle = '#aaa';
  context.stroke();

  context.beginPath();
  context.moveTo(0, (context.canvas.height * imageMultiplier) / 2);
  context.lineTo(context.canvas.width * imageMultiplier, (context.canvas.height * imageMultiplier) / 2);
  context.moveTo((context.canvas.width * imageMultiplier) / 2, 0);
  context.lineTo((context.canvas.width * imageMultiplier) / 2, context.canvas.height * imageMultiplier);
  context.strokeStyle = '#000';
  context.stroke();
}
