/**
 * ==================================================================================================
 * PORTFOLIO.JS
 * ==================================================================================================
 * Author: Kaitlin Kidd
 * Date: 09.15.16
 * Version: 0.0.1
 * Purpose: Javascript/JQuery for website.
 * Notes: 
 * --- Smooth Scrolling: https://css-tricks.com/snippets/jquery/smooth-scrolling/
 * --- Animate.css: https://daneden.github.io/animate.css/
 * --- Waypoints: http://imakewebthings.com/waypoints/
 * --- Fancybox: http://fancybox.net/
 * --- Isotope Filtering: http://isotope.metafizzy.co/
 * 
 * --------------------------------------------------------------------------------------------------
 * Revision History
 * --------------------------------------------------------------------------------------------------
 * Date          Revision Description                                                     Modified By
 * --------------------------------------------------------------------------------------------------
 * 09.15.2016 - Created Original Document                                                         KAK
 * ==================================================================================================
 * 

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


$(document).ready(function() {

    /* Waypoints */
    
    /* Experience */
    $('.wp0').waypoint(function() { $('.wp0').addClass('animated fadeInDown'); }, { offset: '100%' });
    $('.wp1').waypoint(function() { $('.wp1').addClass('animated fadeInUp'); }, { offset: '100%' });
    $('.wp2').waypoint(function() { $('.wp2').addClass('animated fadeInUp'); }, { offset: '100%' });
    $('.wp3').waypoint(function() { $('.wp3').addClass('animated fadeInUp'); }, { offset: '100%' });
    $('.wp4').waypoint(function() { $('.wp4').addClass('animated fadeInUp'); }, { offset: '100%' });
    
    /* Skills */
    $('.wp5').waypoint(function() { $('.wp5').addClass('animated fadeInDown'); }, { offset: '100%' });
    $('.wp6').waypoint(function() { $('.wp6').addClass('animated fadeInUp'); }, { offset: '100%' });
    $('.wp7').waypoint(function() { $('.wp7').addClass('animated fadeInUp'); }, { offset: '100%' });
    $('.wp8').waypoint(function() { $('.wp8').addClass('animated fadeInUp'); }, { offset: '100%' });
    
    /* About Me */
     $('.wp9').waypoint(function() { $('.wp9').addClass('animated fadeInDown'); }, { offset: '100%' });
     $('.wp10').waypoint(function() { $('.wp10').addClass('animated fadeInUp'); }, { offset: '100%' });
     $('.wp11').waypoint(function() { $('.wp11').addClass('animated fadeInUp'); }, { offset: '100%' });
    
    /* Contact */
    $('.wp12').waypoint(function() { $('.wp12').addClass('animated fadeInDown'); }, { offset: '100%' });
    $('.wp13').waypoint(function() { $('.wp13').addClass('animated fadeInUp'); }, { offset: '100%' });
    $('.wp14').waypoint(function() { $('.wp14').addClass('animated fadeInUp'); }, { offset: '100%' });
    $('.wp15').waypoint(function() { $('.wp15').addClass('animated fadeInUp'); }, { offset: '100%' });

    /* Fancy Box */
    $(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',

        helpers : {
            title : {
                type : 'inside'
            }
        }
    });

    /* Tool Tip Hover */
    $('.tooltip-hover').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });

    /* Scroll Effects: FadeIn Down 
     * Section: Experience
     * Source: Animate.css - https://daneden.github.io/animate.css/
     */
    $(window).scroll(function() {

        $('.animation-elements').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animated fadeInDown").css('opacity' , '1');
            }
        });
    });
    
    /* Scroll Effects 2: Pulse
     * Section: Skills
     * Source: Animate.css - https://daneden.github.io/animate.css/
     */
    $(window).scroll(function() {

        $('.animation-elements-two').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animated pulse").css('opacity' , '1');
            }
        });
    });
    
    /* Scroll Effects 3: FadeIn Up 
     * Section: Projects
     * Source: Animate.css - https://daneden.github.io/animate.css/
     */
    $(window).scroll(function() {

        $('.animation-elements-three').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animated fadeInUp").css('opacity' , '1');
            }
        });
    });
    
    /* Scroll Effects 4: FadeIn Left 
     * Section: About Me
     * Source: Animate.css - https://daneden.github.io/animate.css/
     */
    $(window).scroll(function() {

        $('.animation-elements-four').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animated fadeInLeft").css('opacity' , '1');
            }
        });
    });
    
    /* Scroll Effects 5: FadeIn Right 
     * Section: Contact
     * Source: Animate.css - https://daneden.github.io/animate.css/
     */
    $(window).scroll(function() {

        $('.animation-elements-five').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("animated fadeInRight").css('opacity' , '1');
            }
        });
    });

    /* Projects Filter 
     * Source: Isotope Filtering - http://isotope.metafizzy.co/
     */
    $(window).load(function(){
        var $container = $('.projects-container');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.projects-filter a').click(function(){
            $('.projects-filter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });

});

