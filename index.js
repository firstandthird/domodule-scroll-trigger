/* global window,document */
'use strict';

const debounce = function(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments; // eslint-disable-line prefer-rest-params
    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

class ScrollTrigger {
  constructor(el) {
    this.added = false;
    this.el = el;

    this.calcBounds();
    this.eventHandler = debounce(this.onScroll.bind(this), 10, true);
    window.addEventListener('scroll', this.eventHandler);
    window.addEventListener('resize', this.calcBounds.bind(this));
    //trigger right away
    this.eventHandler();
  }

  calcBounds() {
    const dataset = this.el.dataset;
    this.class = dataset.scrollClass;

    this.startEl = (dataset.scrollStart) ? document.querySelector(dataset.scrollStart) : this.el;
    const rect = this.startEl.getBoundingClientRect();
    this.start = rect.top + window.scrollY;

    if (dataset.scrollEnd) {
      const endEl = document.querySelector(dataset.scrollEnd);
      const endRect = endEl.getBoundingClientRect();
      this.end = endRect.top + window.scrollY;
    }
  }

  addClass() {
    this.el.classList.add(this.class);
    this.added = true;
  }
  removeClass() {
    this.el.classList.remove(this.class);
    this.added = false;
  }

  onScroll() {
    const scroll = window.scrollY;
    if (scroll < this.start || (this.end && scroll > this.end)) {
      if (this.added) {
        this.removeClass();
      }
      return;
    }

    if (this.added) {
      return;
    }
    this.addClass();
  }
}

const init = function(query) {
  if (!query) {
    query = document.querySelectorAll('[data-scroll]');
  }
  for (let i = 0, c = query.length; i < c; i++) {
    const el = query[i];
    new ScrollTrigger(el);
  }
};

export default init;

window.addEventListener('DOMContentLoaded', () => {
  init();
});
