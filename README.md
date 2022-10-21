# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![Screenshot of solution](./complete.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I had to learn to use the position property in order to properly position the svg images. In particular, this code overwrites the overflow hidden property of the main container in order to properly display the box image.

```css
#container {
  position: relative;
  overflow: hidden;

  & #box-wrapper {
    position: absolute;

    & #box-desktop {
      position: fixed;
    }
  }
}
```

### Continued development

I'd like to work with the position property more. When I began the project I hadn't used this property much before so I struggled properly implementing it within this solution. After completing this project I think that this is a powerful property that I should learn more about to better create responsive designs when using this property.

## Acknowledgments

- [Override overflow hidden](https://stackoverflow.com/questions/12013066/how-to-ignore-parent-elements-overflowhidden-in-css) - This provided the solution to override the overflow hidden property of the parent container of the box image.
