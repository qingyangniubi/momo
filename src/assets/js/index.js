/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */
import $ from "jquery";

// 监听滚动动画
var scrolltop = null;
var h = document.documentElement.clientHeight;
window.onscroll = setAnimated
let setAnimated = function setAnimated() {
    scrolltop = document.documentElement.scrollTop;
    if (scrolltop >= $(".j-top").offset().top - h - 50) {
        $(".j-top").show();
    }
    if (scrolltop >= $(".j-private-idx").offset().top - h - 50) {
        $(".j-private-idx").addClass("fadeInLeftBig");
    }

    if (scrolltop >= $(".j-international").offset().top - h + 50) {
        $(".j-animated").addClass("bounceIn");
    }


    if (scrolltop >= $(".j-international").offset().top - h + 100) {
        $(".j-rotateIn").addClass("rotateIn");
    }
    if (scrolltop >= $(".j-international").offset().top - h + 150) {
        $(".p-play").addClass("rubberBand");
    }

    if (scrolltop >= $(".j-trademark").offset().top - h - 50) {
        $(".j-trademark").addClass("bounceIn");
    }
    if (scrolltop >= $(".j-slideInLeft").offset().top - h - 50) {
        $(".j-slideInLeft").addClass("slideInLeft");
    }
    if (scrolltop >= $(".j-slideInRight").offset().top - h - 50) {
        $(".j-slideInRight").addClass("slideInRight");
    }

    if (scrolltop >= $(".j-journalism").offset().top - h - 50) {
        $(".j-journalism-title").addClass("rollIn");
    }

    if (scrolltop >= $(".j-play-item").offset().top - h - 50) {
        $(".j-right").addClass("bounceInRight");
        $(".j-img-left").addClass("bounceInLeft");
    }
}

export default {
    setAnimated
}