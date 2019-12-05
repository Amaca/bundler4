/* jshint esversion: 6 */
/* global window, document, Swiper */

import Dom from './shared/dom';
import Utils from './shared/utils';
import cssVars from 'css-vars-ponyfill';
 
 // settings
const debug = false;

window.debug__ = (...args) => {
    if (debug) {
        console.log(...args);
    }
};
window.log__ = (...args) => {
    console.log(...args);
};
window.error__ = (...args) => {
    console.error(...args);
};


export default class App {

    constructor() {}

    init() {
        cssVars();
        log__('%c Coded by Websolute ', 'background: #01c0f6; color: #fff; border-radius: 20px; padding: 10px;');
        const body = document.querySelector('body');
        const page = document.querySelector('.page');
        const header = document.querySelector('.header');

        Dom.detect(body);
     
        this.body = body;
        this.page = page;
        this.header = header;
        
        this.onResize();
        this.addListeners();
    }

    addListeners() {
        window.addEventListener('resize', () => {
            this.onResize();
        });

        window.addEventListener('scroll', Utils.throttle(() => {
            this.onScroll();
        }, 1000 / 25));

		window.addEventListener('orientationchange', (e) => {
            this.checkDevice();
        });
    }

    onResize() {
        
    }

    onScroll(e) {
        
	}


    checkDevice(e) {
        if (Dom.mobile) {
            const html = document.querySelector('html');
            const orientation = window.orientation & 2;
            if (orientation == 0) {
                if (html.classList.contains('landscape')) {
                    html.classList.remove('landscape')
                }
                html.classList.add('portrait')
            } else if (orientation == 2) {
                if (html.classList.contains('portrait')) {
                    html.classList.remove('portrait')
                }
                html.classList.add('landscape')
            }
        }
    }
}

var app = new App();

window.onload = () => {
    app.init();
};