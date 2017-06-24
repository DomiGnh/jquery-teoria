'use strict';

//funkcja document.ready()-wersja skrócona
$(function(){
    
    //efekt show i hide
    $('p').hide(3000).show(3000);
    
    
   //efekt fadeOut i fadeIn połaczone z opacity
    $('h1').fadeOut(3000).fadeIn(3000);
    
    
    //efekt slide
    $('h2').slideUp(3000).slideDown(3000);
    
    
    //funkcja zwrotna aniamcji - callback
    function animacja(){
         console.log('zakonczono pierwsza animacje. zaraz startuje druga');
        
        $('h3').animate({'font-size': '1em', 'margin-left': '0px'}, 2000);
    }
    
    
    //efekt animacji z funkcją zwrotną animacja 
    $('h3').animate({'font-size': '3em', 'margin-left':'100px'}, 2000, animacja);
});