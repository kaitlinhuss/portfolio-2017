/**
 * ==================================================================================================
 * SCROLLER.JS
 * ==================================================================================================
 * Author: Kaitlin Kidd
 * Date: 09.15.16
 * Version: 0.0.1
 * Purpose: Back to top scroller for website.
 * Notes: 
 * ---- Back to Top: CodexWorld - http://www.codexworld.com/back-to-top-button-using-jquery-css/
 * 
 * --------------------------------------------------------------------------------------------------
 * Revision History
 * --------------------------------------------------------------------------------------------------
 * Date          Revision Description                                                     Modified By
 * --------------------------------------------------------------------------------------------------
 * 09.15.2016 - Created Original Document                                                         KAK
 * ==================================================================================================
 */  
 
/* Back to top scrolling
 * Author: CodexWorld
 * Date: 04.27.2016
 * Source: CodexWorld - http://www.codexworld.com/back-to-top-button-using-jquery-css/
 * Used: Floadting back to top arrow on right side.
 */ 

 $(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    });

    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
 });