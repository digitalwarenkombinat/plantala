/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const fsExtra = require('fs-extra');

// Define defaul color constants
const colors = {
  primaryColor: '',
  secondaryColor: '',
  backgroundColor: '',
  textColor: '',
  errorColor: '',
  infoColor: '',
  successColor: '',
};

const images = [];

// Get all files of the current directory & iterate over them
const imageDirectory = 'public/images';

const files = fs.readdirSync(imageDirectory);

files.forEach((file) => {
  const fileSource = `${imageDirectory}/${file}`;
  const fileStat = fs.statSync(fileSource);

  // Extract folders and hidden files
  if (!/^\..*/.test(file) && !fileStat.isDirectory()) {
    const fileName = file.substr(0, file.lastIndexOf('.'));

    images.push({
      name: fileName,
      source: `${file}`,
      description: '',
      link: '',
      wiki: '',
    });
  }
});

const data = {};
data.colors = colors;
data.images = images;
const dataJS = `export const data = ${JSON.stringify(data, null, 2)};`;

fsExtra.writeFileSync('src/data.tsx', dataJS, 'utf-8');
