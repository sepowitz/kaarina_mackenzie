(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var $contentWrapper = $('.content-wrapper');
var $mobileNav = $('.mobile-nav');
var $navTrigger = $('.js_nav-trigger');
var $body = $('body');

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
  if ($contentWrapper.hasClass('grid-view')) {
    return;
  }
  if ($contentWrapper.hasClass('slider-view')) {
    $contentWrapper.removeClass('slider-view').addClass('grid-view');
  }
  return;
});

$('.js_slider-trigger').on('click', function () {
  if ($contentWrapper.hasClass('slider-view')) {
    return;
  }
  if ($contentWrapper.hasClass('grid-view')) {
    $contentWrapper.removeClass('grid-view').addClass('slider-view');
  }
  return;
});

$navTrigger.on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $mobileNav.toggleClass('active');
  $body.toggleClass('no-scroll');
});

},{}]},{},[1]);
