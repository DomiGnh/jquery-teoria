'use strict';

//funckja document.ready()- wersja skrócona

$(function(){
    
    //pobieranie wszytskich elemntów p
    var paragraphs = $('p');
    console.log(paragraphs);
    
    //pobieranie el po id
    var paragraphOne = $('#paragraf');
    console.log(paragraphOne);
    
    //poboeranie el po klasie 
    
    var paragraphTwo =$('.paragraf');
    console.log(paragraphTwo);
});