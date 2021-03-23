# less-css-helper-library

Helper [less/css library](https://github.com/code-collabo/less-css-helper-library) to be used in css, less and frontend projects, built as close as possible to css itself. Related css key value pairs often used together are stored in classes for ease, reuse and to give quick structuring.
 
## v1.0.0 styles & classes
v1.0.0 contains reset styles & some classes which you can apply on html elements:

* `.block` 
* `.block-auto`
* `.b-container` 
* `.grid`
* `.grid-auto-1-auto-row` 
* `.flex` 
* `.flex-space-btw` 
* `.flex-auto` 
* `.flex-space-btw-auto` 
* `.flex-center` 
* `.flex-j-center` 
* `.flex-a-center` 
* `.x-auto` 
* `.img-wrapper` 
* `.img-wrapper-rounded` 
* `.img-default`

## How to use
#### Install [package from npm]():
`npm install less-css-helper-library`

#### Reference the library in your project with:
* ***For css project:*** `./node_modules/less-css-helper-library/css/styles.css`
* ***For less project:*** `node_modules/less-css-helper-library/less/styles.less`

You can just ***reference both*** in your project if you use `less` & may need to switch to or mix with `css`. Make sure to add the reference(s) before that of your own css and/or less files.

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
* `.grid-auto-1-auto-row` sets display to grid, `grid-template-rows` to `auto 1fr auto` & `grid-template-columns` to `1fr`.
* `.img-wrapper` has same qualities of `.flex-center`, but with overflow set to hidden - to be used on the parent of an `img` element.
* `.img-wrapper-rounded` has same qualities of `.img-wrapper` but with border-radius set to 50% - to be used on the parent of an `img` element.
* `.img-default` is same as our reset style for images. It sets an `img` element's max-width to 100% and height to auto. ***Note:*** An `img` element inside a parent that uses `.img-wrapper` or `.img-wrapper-rounded` must be set to the reset style.

You have total control over what the width of the element (and margin in the case of `-auto`) should be. More details & tutorial coming soon on this topic.

## How to contribute
At the moment it is maintained by just one person - @Ifycode. Meaning that more features will be added only when needed. If you like and have started using the library in your projects but doesn't contain what you need (yet), you can help speed up the process by raising it as an issue or send a pull request. Please take note of the following:
* The styles or classes you propose must be as close as possible to css itself, group related property-value pairs, should be reusable, and usable in any section inside the body of html documents.
* Do not make...
