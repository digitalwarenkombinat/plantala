# Media station as a Service (MaaS)

The _Media station as a Service_ (MaaS) offers a simple and user-friendly way to create a media station by combining the power of Plantala with your own images. Semi-automated processes allow you to integrate your data and customize the media station without deep technical knowledge.
## Features

✅ Create your own media station in just 3 simple steps.

✅ Automatic image import and background removal.

✅ Edit and add background information for your media content.

✅ Automatic color scheme based on your starting image.

✅ Customizable color themes for the media station.

✅ Display information with a clean and visually appealing design.

# TL;DR

    🚀 Step 1: Copy your images to the `public/images/input` folder, and add a logo (`public/images/logo.png`) and a starting image (`public/images/start.png`).

    🚀 Step 2: Start the media station with `docker-compose up -d --build`.

    🚀Step 3: Generate media data with `docker exec -d plantala-app npm run media-data`, then edit public/mediaData.js for background info and color customization.

# Creating Your Own Media Station in 3 Simple Steps

You can create your own media station in three easy steps.

1. Copy Your Images
2. Start the Media Station
3. Customize Your Media Data & Color Scheme

---

## Step 1: Copy Your Images 🎨

First, copy all the images you want to use to the `public/images/input` folder. These images will automatically have their backgrounds removed when you start the media station.

Guidelines for Images:

    For best results, each image should contain a single object on a solid background.
    The filename of each image will be used as the title in the media station, so name your files accordingly.

Additionally, you’ll need a logo and a starting image. These should be placed directly in the `public/images` folder:

    logo.png: Your logo for the media station.
    start.png: The starting image, which will be used to generate the color scheme.

## Step 2: Start the Media Station 🚀

To run your media station, you'll need _Docker_, which is a tool that lets you run applications in isolated environments called containers.

Steps to Install and Start _Docker_:

1. Install _Docker_: Follow the instructions at [Install Docker](https://docs.docker.com/get-docker/) for your operating system.

2. Start the media station: Once _Docker_ is installed, open your terminal and run:

```
    docker-compose up -d --build
```

This command will start two services:

1. plantala-media-data: Automatically removes the backgrounds from your images.
2. plantala-app: Hosts the media station, accessible at http://localhost:3000/.

Your media station is now live, but there's one more step to finalize it.

## Step 3: Add Background Information & Customize the Color Scheme 🎨

After the background removal process, your images will be placed in the public/images folder (alongside logo.png and start.png). Now, it’s time to display them in the media station and customize the color scheme.

Generate Media Data:

Run the following command in your terminal to generate the media data for your station:

```
docker exec -d plantala-app npm run media-data
```

After this, open the media station again [with this link](http://localhost:3000/), and you should see all your images.

Customizing the Color Scheme:

The media station’s color scheme is automatically derived from the starting image (start.png), but you can further customize it. The generated media data is saved in _public/mediaData.js_, which includes colors based on the starting image.
Example Color Configuration:

```
const primaryColor = '#799160';     // Primary color
const secondaryColor = '#e0bf96';   // Secondary color
const backgroundColor = '#faebd7';  // Background color
const textColor = '#341419';        // Text color
const errorColor = '#f3aa1e';       // Error message color
const infoColor = '#ab465a';        // Info message color
const successColor = '#f3aa1e';     // Success message color
```

You can customize these colors using any hex color value. For easy color selection, use the [Colordot website](https://color.hailpixel.com/)..
Additional Customization:

In public/mediaData.js, you can also update the following details for each image:

    _name_: Title of the image (derived from the file name).
    _source_: The file path to the clipped image.
    _description_: A short description of the image.
    _link_: An optional external link (e.g., a reference to the original content).
    _wiki_: An optional link to Wikipedia or similar resources.

Any changes you make will be immediately visible in the media station after refreshing the page.

# You're Done! Your Media Station Is Ready 🎉

Congratulations! Your media station is now live, and you can access it [here](http://localhost:3000/).

Exporting the Media Station:

If you want to share or deploy your media station, you can export it with this command:

```
docker exec -d plantala-app npm run build
```

This will create two versions:

1. A Node.js-supported production application in the .next folder for hosting on your server.
2. A static HTML version in the out folder, which can be hosted without a Node.js server.

Stopping the Media Station:

When you're done, you can stop the media station using:

```
docker-compose stop
```

Enjoy your media station!