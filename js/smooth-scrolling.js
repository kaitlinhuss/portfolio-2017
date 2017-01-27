/* Smooth Scrolling
 * Author: Chris Coyier
 * Date: 01.31.2016
 * Source: CSS-Tricks - https://css-tricks.com/snippets/jquery/smooth-scrolling/
 * Reference: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
 * Used: Down arrow in hero section.
 */

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
