import fs from 'fs-extra';

interface IData {
  colors: {}
  images: IImage[]
}

interface IImage {
  name: string
  source: string
  description: string
  link: string
  wiki: string
}

function getColors () {
  return {
    primaryColor: '',
    secondaryColor: '',
    backgroundColor: '',
    textColor: '',
    errorColor: '',
    infoColor: '',
    successColor: '',
  };
}

function getFilesFromDirectory (imageDirectory: string) {
  return fs.readdirSync(imageDirectory);
}

function isFolderOrHidden (imageDirectory: string, file: string) {
  const fileSource = `${imageDirectory}/${file}`;
  const fileStat = fs.statSync(fileSource);
  return (!/^\..*/.test(file) && !fileStat.isDirectory())
}

function getImages () {
  const imageDirectory = 'public/images';
  const files: string[] = getFilesFromDirectory(imageDirectory);
  
  const images: IImage[] = [];
  
  files.forEach((file: string) => {
    if (isFolderOrHidden(imageDirectory, file)) {
      return;
    }

    const fileName = file.substr(0, file.lastIndexOf('.'));

    images.push({
      name: fileName,
      source: file,
      description: '',
      link: '',
      wiki: '',
    });
  });

  return images;
}

export function createData() {
const data = {} as IData;
data.colors = getColors();
data.images = getImages();

const dataFile = `export const data = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync('../../public/data.tsx', dataFile, 'utf-8');
}
