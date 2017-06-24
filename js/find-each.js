'use strict';

//find- znajduje nam elemnty 

//funkcja document.ready()-wersja skrócona
$(function(){
    
    //wybieranie elementu z koelkcji za pomocą eq()
    $('body').find('p').eq(1).css({'color':'red'});
    
    //eq- indeks
    
    
    //pętla each dodająca do paragrafów klasę z kolejnym numerem
    $('p').each( function(index){
         
        
        $(this).addClass('paragraf-' + index);
        
        console.log( jQuery(this) );
        
        
    });
    
    
    
    
    
    
});