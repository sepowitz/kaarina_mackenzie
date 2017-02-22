(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var $galleryContainer = $('.gallery-container');

(function ($) {
  $('.lightbox').swipebox();
})($);

$('.dropdown-trigger').hover(function () {
  var $dropdown = $(this).children('.dropdown');
  if (!$dropdown.hasClass('active')) {
    $dropdown.addClass('active');
  } else {
    $dropdown.removeClass('active');
  }
});

$('.js_grid-trigger').on('click', function () {
  if ($galleryContainer.hasClass('grid-view')) {
    return;
  }
  if ($galleryContainer.hasClass('slider-view')) {
    $galleryContainer.removeClass('slider-view').addClass('grid-view');
  }
  return;
});

$('.js_slider-trigger').on('click', function () {
  if ($galleryContainer.hasClass('slider-view')) {
    return;
  }
  if ($galleryContainer.hasClass('grid-view')) {
    $galleryContainer.removeClass('grid-view').addClass('slider-view');
  }
  return;
});

},{}]},{},[1]);
