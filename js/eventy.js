'use strict';
//funckcja skrócona
$(function(){
    
    //pojedyncze zdazrenia na paragarfie 
    $('p').click(function(){
         $(this).css('color','orange');
        
    });
    
//    //grupa zdarzeń na elemnecie 
       $('h1').on({
            'click': function (){
                $(this).css('color','orange');
       },
       
           'mouseleave': function(){
                $(this).css('color', 'inherit');
           }
           
       });
           
           
    
});