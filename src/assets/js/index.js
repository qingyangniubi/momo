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
// console.log($(".j-top").offset().top);
window.onscroll = function () {
    scrolltop = document.documentElement.scrollTop;
    if (scrolltop >= $(".j-top").offset().top - h - 50) {
        $(".j-top").show();
    } else {
        $(".j-top").hide();
    }
    console.log($(".j-private").offset().top);
    if (scrolltop >= $(".j-private").offset().top - h - 50) {
        $(".j-private").show();
    } else {
        $(".j-private").hide();
    }

    if (scrolltop >= $(".j-international").offset().top - h + 50) {
        $(".j-animated").show();
    } else {
        $(".j-animated").hide();
    }


    if (scrolltop >= $(".j-international").offset().top - h + 100) {
        $(".rotateIn").show();
    } else {
        $(".rotateIn").hide();
    }
    if (scrolltop >= $(".j-international").offset().top - h + 150) {
        $(".p-play").show();
    } else {
        $(".p-play").hide();
    }


    if (scrolltop >= $(".j-trademark").offset().top - h - 50) {
        $(".j-trademark").show();
    } else {
        $(".j-trademark").hide();
    }
    if (scrolltop >= $(".slideInLeft").offset().top - h - 50) {
        $(".slideInLeft").show();
    } else {
        $(".slideInLeft").hide();
    }
    if (scrolltop >= $(".slideInRight").offset().top - h - 50) {
        $(".slideInRight").show();
    } else {
        $(".slideInRight").hide();
    }

    if (scrolltop >= $(".j-journalism").offset().top - h - 50) {
        $(".j-journalism-title").show();
    } else {
        $(".j-journalism-title").hide();
    }

    if (scrolltop >= $(".j-play-item").offset().top - h - 50) {
        $(".j-right").show();
        $(".j-img-left").show();
    } else {
        $(".j-right").hide();
        $(".j-img-left").hide();
    }
}

