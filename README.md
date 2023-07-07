# Frontend Mentor - Space Tourism Website

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![screenshot of the space tourism home page](./screenshot.png)

### Links

Here are the links to my solution on GitHub and the live page where you can check out the profile card on your browser.

- Solution URL: [Github Repo](https://github.com/webshuriken/space-tourism-website)
- Live URL: [Four Card Feature](https://webshuriken.github.io/space-tourism-website/)

## My process :computer:

### Built with

- React, react-router
- CSS custom properties
- Tailwindcss
- Mobile-first workflow
- Figma design
- Git and Github/pages

### What I learned

Planning of the, React, components before coding improves the speed of the app creation. But this step must never be missed 
or taken for granted.

I also improved my react router understanding and learned how to implement the latest router version. It is much simpler.

```js
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path='space-tourism-website/' element={ <Home /> } />
  <Route path='space-tourism-website/destination' element={ <Destination /> } />
  <Route path='space-tourism-website/crew' element={ <Crew /> } />
  <Route path='space-tourism-website/technology' element={ <Technology /> } />
</Routes>
```

Using TaildwindCSS is fantastic and allows granular levels of customisation! by using their configuration file.
It loads really quick, super intuitive and it can be used alongside CSS.

```js
theme: {
  extend: {
    colors: {
      'midnight': '#0b0d17',
      'tulip': '#d0d6f9',
      'white': '#ffffff'
    },
    fontFamily: {
      'bellefair': ['Bellefair'],
      'barlow-condensed': ['Barlow Condensed'],
    }
  }
}
```

### Continued development

I would like to feel confortable using the history feature of react-router and also be able to implement it without having to read documentation.

Even though I feel really confortable with tailwindcss, sometime I have to look back at the docs for reassurance. It would be amazing being able to recall them from memory.

### Useful resources

Here are the well written resources used throughout this project.

- [React Router](https://reactrouter.com/en/main/start/overview)
- [React updated docs](https://react.dev/)
- [Tailwindcss](https://tailwindcss.com/docs/installation)

## Author

- Website - [Carlos E Alford M](https://carlosealford.com)
- Frontend Mentor - [WebShuriken](https://www.frontendmentor.io/profile/WebShuriken)
- Twitter - [@webshuriken](https://www.twitter.com/webshuriken)

## Acknowledgments

To the whole Dev Community, keep dreaming and innovating. Thank you all. :smile:

**This project is a collaboration between us (Frontendmentor), Scrimba, and Kevin Powell. If you'd like to see how Kevin would tackle the project, you can [follow along on Scrimba's free course](https://scrimba.com/learn/spacetravel).**





























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
