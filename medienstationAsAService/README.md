# Medienstation as a Service - MaaS

The _Media Station as a Service_ (MaaS) offers you a simple way to combine the advantages of Plantala with your own images. Semi-automated steps help you integrate your data and customize the media station to your liking, even without deep technical knowledge.

## Features

✅ Create your own media station in just 3 steps.

✅ Automated image import and background removal.

✅ Supported data editing and adding background information.

✅ Colors are analyzed based on your starting image.

✅ Customizable color scheme for the media station.

✅ Enjoy a visually pleasing way to convey information with your data.

# TL;DR

 🚀 Copy your images to the `public/images/input` folder and design a logo `public/images/logo.png`, as well as a starting image `public/images/start.png`.
  
🚀 Start the media station with `docker-compose up -d --build`.

🚀 Generate media data with `docker exec -d plantala-app npm run media-data` and edit background information for images and color values for your media station in `public/mediaData.js`.

# Creating Your Own Media Station in 3 Steps

You can create your own media station in three simple steps.

1. Copy Images
2. Start the Media Station
3. Customize Images and Information

---

## Step 1. Copy Your Images 🎨

First, copy all your images to the `public/images/input` folder. All images will be automatically clipped (i.e., the background will be removed) when you start the media station and will be included in it.

Please note the following guidelines for your images:

- For the best results, use a single object with a solid background in each image.
- The filename will be used as the title of the images in the media station. Please name the images according to the depicted object.

In addition, your media station needs a logo and a starting image. These two images do not need to be clipped and can be directly inserted into the `public/images` folder (not `public/images/input`) as `logo.png` and `start.png`, respectively.

Once this is done, you can start your media station.

## Step 2. Start the Media Station 🚀 

To start the media station, an application called _Docker_ is used. In simplified terms, _Docker_ is like another computer on your computer, allowing you to access the media station and initiate the removal of backgrounds from all your copied images.

_Docker_ automatically installs all the necessary libraries when you start it. So, you don't need to install any additional applications on your computer except for _Docker_. To install it, click on [Install Docker](https://docs.docker.com/get-docker/) and select your operating system.

After the installation is complete, you can start your media station with the following command in the terminal:

```
docker-compose up -d --build
```

This will start two containers. The _plantala-media-data_ container removes the backgrounds from all your copied images and then terminates.

The _plantala-app_ container contains the complete media station and can be accessed on your computer at [this link](http://localhost:3000/).

Congratulations, your media station is now visible. To have all your images and information appear in it, one more third and final step is needed.

## Step 3: Adding Background Information & Customizing the Color Scheme 🎨

Your copied images have all been clipped in the background and are now located next to your logo and starting image in the `public/images` folder.

To display the images in the media station, update the media data.

This is done with the terminal command:

```
docker exec -d plantala-app npm run media-data
```

Open the link to your media station again [with this link](http://localhost:3000/).

All your images will now appear in the media station. Furthermore, your logo and starting image will be visible. This starting image has also changed the color scheme of the media station. The most significant colors from the starting image are now used as primary and secondary colors.

You are welcome to make adjustments to the newly generated media data in `public/mediaData.js`.

A total of 7 colors have been derived from the starting image. The color values are given as 6-digit web colors with a leading hash symbol (#). You can choose your preferred color and customize each color value using the [Colordot website](https://color.hailpixel.com/).

Here's what each color value represents:

```
const primaryColor = '#799160';     // Primary color of the media station
const secondaryColor = '#e0bf96';   // Secondary color of the media station
const backgroundColor = '#faebd7';  // Background color of the media station
const textColor = '#341419';        // Text color of the media station
const errorColor = '#f3aa1e';       // Color for error messages within the media station
const infoColor = '#ab465a';        // Color for info messages within the media station
const successColor = '#f3aa1e';     // Color for success messages within the media station
```

The media data also includes all clipped images. You can make adjustments here as well.

If you are familiar with file paths, you can make adjustments under _source_.

For each image, the following 5 elements are provided:

- _name_ is the image title derived from the file name for the media station.
- _source_ is the technical path to the clipped image.
- _description_ is the description text for the image as displayed in the media station.
- _link_ provides the option to specify an external reference, such as a link to the original document.
- _wiki_ provides the option to include a link to Wikimedia or similar.

All your adjustments will be immediately displayed in the media station. To do so, open the link to your media station again [with this link](http://localhost:3000/).

## You're done. Your media station can now be deployed 🎉

Great! Your media station is ready, and you can view it [here](http://localhost:3000/).
To share the media station with others, you can export it.

To do this, use _Docker_ again with the following command:

```
docker exec -d plantala-app npm run build
```

Your media station will be exported in two variants for you:

1. As a Node.js-supported production application in the `.next` folder for your own server.
2. As static HTML in the `out` folder, which can run independently (without a Node.js server).

Once you are satisfied with all the customizations of your media station and have successfully exported it, you can stop the _Docker_ containers with the following command:

```
docker-compose stop
```

And now, enjoy your media station!
