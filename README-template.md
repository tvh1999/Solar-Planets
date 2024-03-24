# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [Next.js](https://nextjs.org/) - React framework

### What I learned

This is my first fully ready Next.js project that I built from scratch. It was hard with many bugs and challenges to overcome, but in the end I have managed to do it. It took me fours days to do the project and I am happy with the result. This is what I have learned:

- Use suspense to allow the Next.js to divide the data needed to render into two chunks: the one that can load quickly will be rendered first and sent to the client to show the user while the part that relied on outside data will be render right after that. This will help optimize the project and improve the user experience (I hope).
- Use server components and client components. Knowing how to deal with the situation when a client component renders a server component.
- Use built-in google fonts to import and use multiple font families on the fly.
- Create a not-found.js which will automatically be rendered when the users went into the wrong file path. This will create a user friendly, customized 404 page.
- Deal with metadata in general, good for SEO if I am not mistaken.
- Use dynamic segment to dynamically render similar structured pages based on their content throught the user file path (sorry if it is confusing, English is not my first language so I don't know the exact words to put it)
- Create compenents and I have tried to reuse them to the best of my abilities but without making them too complicated in the process.
- Dealing with the file path like this: `href: "/planets/mercury"`, especially regarding the use of dynamic segment. Remember to never put the dynamic segments into the file path, instead use template string to hold the value of the dynamic segments.
- Extract the data from json file: `import myJson from "../data.json" assert { type: "json" };`
- Use Next.js fully optimized components like `<Link></Link>` and `<Image />`
- How to use tailwind: this is actually the biggest obstacle, since this is my first project and I am learning it on the go. Have to wrap my head around the use of classes and responsive, but I am happy with the result.
- Knowing when to use px, rem when styling in CSS. I don't use em because there is hardly a time when I need to use it.
- Responsive: I use tailwind since I think it is less cumbersome than the built-in module styles of Next.js. Both are good in their own ways but I am actually in favor of Tailwind due to how easy it is to use them since you have a good grasp on how they work. I use grid system to layout the position of my components and flex to deal with the things inside.
- Also, DON'T INSTALL TAILWIND PRETTIER. That stupid thing made my project stopped responsive immediately after its installation, also it didn't bring much to the table and I am sick of trying to configure it only to run into all kinds of bugs. So I simply don't install it.

### Continued development

- I am fully aware that my there are much more needed to be done, like accessibilities and SEO, also cleaner code and I will try to improve and refactor the codes in the future.
- Also I hope to learned more about metadata, especially the use of favicon icon in my projects.

### Useful resources

- [Rem or Pixels?](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/) - This blog helped me to use the correct units in styling. I really liked this pattern and will use it going forward.
- [App router?](https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them) - This is an amazing document which helped me finally understand the common pitfalls when handling with app router. I'd recommend it to anyone still learning this concept.

- [Tailwind Docs](https://tailwindcss.com/docs/installation) - if you use tailwind then you will need to know about this docs of course.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
