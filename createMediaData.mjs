import Vibrant from 'node-vibrant';
import fs from 'node:fs/promises';

const imageDirectory = 'public/images';

async function getColors() {
  try {
    const startImage = `${imageDirectory}/start.png`;
    const vibrantData = await Vibrant.from(startImage).quality(1).getPalette();

    const vibrantYiq =
      (vibrantData.Vibrant.rgb[0] * 299 + vibrantData.Vibrant.rgb[1] * 587 + vibrantData.Vibrant.rgb[2] * 114) / 1000;

    return {
      primaryColor: vibrantData.Vibrant.hex,
      secondaryColor: vibrantData.Muted.hex,
      backgroundColor: vibrantData.LightVibrant.hex,
      textColor: vibrantYiq < 150 ? '#fff' : '#000',
      errorColor: vibrantData.DarkVibrant.hex,
      infoColor: vibrantData.LightMuted.hex,
      successColor: vibrantData.DarkMuted.hex,
    };
  } catch (err) {
    console.log(err);
  }
}

async function getImages() {
  const files = await fs.readdir(imageDirectory);
  try {
    const images = files
      .filter((file) => file.endsWith('.webp'))
      .map(async (file) => {
        const fileName = file.substr(0, file.lastIndexOf('.'));
        return {
          name: fileName,
          shortName: fileName,
          source: fileName,
          description: '',
          link: '',
          wiki: '',
        };
      });

    return await Promise.all(images);
  } catch (err) {
    console.log(err);
  }
}

export async function createData() {
  const mediaData = {};
  mediaData.isMaaS = true;
  mediaData.elementSuffix = '.webp';
  mediaData.colors = await getColors();
  mediaData.images = await getImages();

  const mediaDataFile = `export const mediaData = ${JSON.stringify(mediaData, null, 2)};`;
  const mediaDataFilePath = 'public/mediaData.js';
  await fs.writeFile(mediaDataFilePath, mediaDataFile, 'utf-8');
}

createData();
