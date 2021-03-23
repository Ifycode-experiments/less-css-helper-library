# less-css-helper-library

Helper [less/css library](https://github.com/code-collabo/less-css-helper-library) to be used in css and frontend projects, built as close as possible to css itself. Related css key value pairs often used together are stored in classes for ease, reuse and to give quick structuring.
 
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
#### Install:
`npm install less-css-helper-library`

#### Reference the library in your project with:
`./node_modules/less-css-helper-library/css/styles.css` (for css project) or `node_modules/less-css-helper-library/less/styles.less` (for less project).

#### Class names:
From the class names, it's easy to tell what they do. See effect when added to an html element below:
* `.block` only sets display to block.
* `.grid` only sets display to grid. 
* `.flex` only sets display to flex.
* `.flex center` sets display to flex, justify-content & align-items are set to center. 
* `flex-j-center` only sets display to flex & justify-content to center.
* `flex-a-center` only sets display to flex & justify-content to center.
* Class names with suffix `-auto` uses same styles as their look-alikes above, but make use of `margin: 0 auto;`. When applied on an element (with width changed to less than 100%), the element is horizontally centered. 
* `.b-container` uses same style as `block-auto`, but with width set & is responsive already. To be used on the body element or html element(s) acting as outermost containers.
* **Exception:** `x-auto` sets overflow to auto.

You have total control over what the width of the element (and margin in the case of `-auto`) should be. More details & tutorial comming soon on this topic.

