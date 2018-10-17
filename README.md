# scroll-triggers

A tiny, dependency-less javascript library to add classes as elements scroll into viewport.

## Features

* Add a class when an element comes into view (great for animations)
* Set an image when an element comes into view (great for lazy loading)
* Set the width of an element based on scroll % (great for scroll progress bars)
* API for both HTML and Javascript

## Install

`npm install scroll-triggers`

## Setup

```javascript
import 'scroll-triggers';
// or
import scrollTriggers from 'scroll-triggers';
```

## Events

Custom events are fired/listened on the element:

| Event                      | Type   | Description             |
|----------------------------|--------|-------------------------|
| `scrolltriggers:inView`    | Fired  | Element is in view      |
| `scrolltriggers:outOfView` | Fired  | Element is out of view  |
| `scrolltriggers:pause`     | Listen | Pauses scroll-triggers  |
| `scrolltriggers:resume`    | Listen | Resumes scroll-triggers |

## Options

| Event                      | Type   | Description             |
|----------------------------|--------|-------------------------|
| `className`    | {string}  | Class to be added/removed when element is in view |
| `start`    | {string\|Element\|NodeList} CSS Selector  | Add class when the specified element is in view |
| `end` | {string\|Element\|NodeList} CSS Selector | Removes class when the specified element is in view  |
| `position` | {string = 'bottom'} "top\|middle\|bottom" | Add class at when element hits the specified position of page |
| `positionEnd` | {string = 'bottom'} "auto\|top\|middle\|bottom" | Removes class when specified element hits the specified position of page |
| `image` | {string} Path to image | Set an image when an element comes into view |
| `src` | {string} Path to resource | Set the `src` property when an element comes into view |
| `srcset` | {string} Path to resource | Set the `srcset` property when an element comes into view |
| `progress` | {boolean = false} | Set the width of an element based on scroll % |
| `once` | {boolean = true} | Whether scroll-triggers should be executed once or not |
| `inView` | {function} | Callback executed when element is in view |
| `outOfView` | {function} | Callback executed when element is out view |

## Usage

### HTML

Add class when element is in view.

```html
<div data-scroll data-scroll-class="class-to-add"></div>
```

Add class when another element is in view.

```html
<div data-scroll data-scroll-class="class-to-add" data-scroll-start=".some .selector"></div>
```

Add class when another element is in view and remove when it gets to another element

```html
<div data-scroll data-scroll-class="class-to-add" data-scroll-start=".some .selector" data-scroll-end=".some .lower .selector"></div>
```

Add class at when element hits bottom of page

```html
<div data-scroll data-scroll-class="class-to-add" data-scroll-position="bottom"></div>
```

Add class at when element hits middle of page

```html
<div data-scroll data-scroll-class="class-to-add" data-scroll-position="middle"></div>
```

Set an image when an element comes into view

```html
<div data-scroll data-scroll-image="/path/to/image.jpg"></div>
```

Set the width of an element based on scroll % (great for progress bars)

```html
<div data-scroll data-scroll-progress></div>
```

Set the `src` property when an element comes into view (great for lazy load)

```html
<iframe data-scroll data-scroll-src="https://wikipedia.org/wiki/Main_Page"/></iframe>
```

Set the `srcset` property when an element comes into view (great for lazy load)

```html
<picture>
  <source media="(min-width: 650px)" data-scroll data-scroll-srcset="http://placehold.it/465x465?text=Min-650" />
</picture>
```

### Javascript

```javascript
import scrollTriggers from 'scroll-triggers';

scrollTriggers({
  '.some-selector': {
    start: '.selector',
    end: '.selector',
    className: 'class-to-add',
    image: 'image/path.jpg',
    src: 'http://url-to-resource.com',
    srcSet: 'http://url-to-resource.com',
    position: 'top|middle|bottom',
    positionEnd: 'auto|top|middle|bottom',
    progress: true|false,
    once: true|false,
    inView: (el, options) => {},
    outOfView: (el, options) => {}
  }
});
```

## License

### MIT License

Copyright (c) 2018 First+Third

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.