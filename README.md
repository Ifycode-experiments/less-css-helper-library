# less-css-helper-library


![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) ![npm version](https://badge.fury.io/js/%40code-collabo%2Fless-css-helper-library.svg) ![GitHub Repo stars](https://img.shields.io/github/stars/code-collabo/less-css-helper-library) ![GitHub forks](https://img.shields.io/github/forks/code-collabo/less-css-helper-library) ![GitHub issues](https://img.shields.io/github/issues/code-collabo/less-css-helper-library?color=red) ![GitHub pull requests](https://img.shields.io/github/issues-pr/code-collabo/less-css-helper-library?color=goldenrod) ![NPM Downloads](https://img.shields.io/npm/dm/@code-collabo/less-css-helper-library)

The [less-css-helper-library](https://github.com/code-collabo/less-css-helper-library) for css, less and frontend projects. Related (css) key value pairs often used together are stored in css classes for easy use, reuse and to help quickly structure your projects. ***Built-in css styles*** are made accessible in your projects just by adding a class to an html element.

## Styles & classes
The library provides some [reset styles](https://github.com/code-collabo/less-css-helper-library/blob/main/less/01-base/reset.less) and classes which you can apply on html elements.

#### [display-related](https://github.com/code-collabo/less-css-helper-library/blob/main/less/02-style/display.less) classes:
* `.block` 
* `.block-auto`
* `.b-container` 
* `.grid`
* `.grid-auto-1-auto-row` 
* `.flex` 
* `.flex-auto` 
* `.flex-space-btw` 
* `.flex-space-btw-auto` 
* `.flex-center` 
* `.flex-j-center` 
* `.flex-a-center` 
* `.x-auto` 
* `.img-wrapper` 
* `.img-wrapper-rounded` 
* `.img-default`

#### [Color-related](https://github.com/code-collabo/less-css-helper-library/blob/main/less/02-style/color.less) classes:
***Note:*** _Color-related classes may not necessarily use built-in values_. For now, only class names for text & buttons are included based on common trend.
* `.error`
* `.error-bold`
* `.btn-default`
* `.btn-transparent`
* `.btn-danger`
 
## How to use
Install the npm package or use the cdn option.

#### Install [npm package](https://www.npmjs.com/package/@code-collabo/less-css-helper-library):
`npm i @code-collabo/less-css-helper-library`

Reference the library in your project with:

`node_modules/@code-collabo/less-css-helper-library/css/styles.css` - _For css project_.

`node_modules/@code-collabo/less-css-helper-library/less/styles.less` - _For less project_.

You can just _reference both_ in case you need to switch from `css` to `less` & vice versa. Make sure to add the reference(s) before that of your own css and/or less files.

If you are using less in an angular project for example, reference the one for less or both in the styles array in your angular.json file. You also need to import it at the top of your main .less file like so:

`@import 'node_modules/@code-collabo/less-css-helper-library/less/styles.less';`

#### Using CDN:
For projects that don't use nodejs, add the css cdn as href value for your link tag in the .html file. Make sure to add this before the other link tags used to reference your own css styles.

`<link rel="stylesheet" href="https://code-collabo.github.io/less-css-helper-library/css/styles.css">`

#### Class names:
From the class names, it's easy to tell what they do. See effect when added to an html element below:
* `.block` only sets display to block.
* `.grid` only sets display to grid. 
* `.flex` only sets display to flex.
* `.flex center` sets display to flex, justify-content & align-items are set to center. 
* `.flex-j-center` only sets display to flex & justify-content to center.
* `.flex-a-center` only sets display to flex & justify-content to center.
* `.flex-space-btw` sets display to flex & justify-content to space-between.
* Class names with ***suffix*** `-auto` uses same styles as their look-alikes above, but make use of `margin: 0 auto;`. When applied on an element (with width changed to less than 100%), the element is horizontally centered. 
* `.b-container` uses same style as `block-auto`, but with width set & is ***responsive*** already. To be used on the body element or html element(s) acting as outermost containers.
* ***Exception:*** `x-auto` sets overflow to auto.
* `.grid-auto-1-auto-row` sets display to grid, grid-template-rows to `auto 1fr auto`, grid-template-columns to `1fr` & also sets the height of the element to 100%.
* `.img-wrapper` has same qualities of `.flex-center`, but with overflow set to hidden - to be used on the parent of an `img` element.
* `.img-wrapper-rounded` has same qualities of `.img-wrapper` but with border-radius set to 50% - to be used on the parent of an `img` element.
* `.img-default` is same as our [reset style](https://github.com/code-collabo/less-css-helper-library/blob/main/less/01-base/reset.less) for images. It sets an `img` element's max-width to 100% and height to auto. ***Note:*** An `img` element inside a parent that uses `.img-wrapper` or `.img-wrapper-rounded` must be set to the reset style, therefore always add the `.img-default` class to such img element.
* `.error` and `.error-bold` are for text, while other color-related classes are for buttons.

You have total control over what the width of the element (and margin in the case of `-auto`) should be. More details & tutorial coming soon on this topic.

## How to contribute
The library is maintained by just one person at the moment - [@Ifycode](https://github.com/Ifycode). Meaning that more features will be added only when needed. If you like and have started using the library in your projects but doesn't contain what you need (yet), you can help speed up the process by raising it as an issue or send a pull request. 

***Please take note of the following:***
* Group property-value pairs that are related or are often used together in one class so that it is reusable.
* The styles or classes (names) you propose must give good idea of the property-value pairs stored in it. 
* Styles or classes proposed must be usable in any section inside the body of html documents.
* Do not make changes directly in the `main` or `develop` branches. See [development environment & git workflow](https://github.com/code-collabo/node-mongo-docs/issues/2) on how to make changes to the code base and submit pull request.

## Technologies
[<img alt="CSS 3" width="25px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />](https://github.com/code-collabo/less-css-helper-library) [<img alt="less" height="20px" src="http://lesscss.org/public/img/less_logo.png" />](https://github.com/code-collabo/less-css-helper-library) [<img alt="node js" height="25px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />](https://github.com/code-collabo/less-css-helper-library)
