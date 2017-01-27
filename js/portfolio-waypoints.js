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
*/


$(document).ready(function() {

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
});
