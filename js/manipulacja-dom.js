'use strict';

//funckja document.ready()- wersja pełna
jQuery(document).ready(function(){
    
    //pobieranie tektu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
    
    //dodawanie tekstu
    $('.paragraf').text(tekstParagrafuPierwszego);
    
    
    //dodawanie HTML
    $('.paragrafnext').html('to jest paragraf z dodanym <br> HTML');
    
    
    //dodoawanie treści na końcu selektora
    $('.paragrafnext').append('treść na końcu selektora');
    
    
    //dodawanie treści za selektorem
    $('.paragrafnext').after('treść za selektorem');
    
    
    //usuwanie el i jego zawartości
    $('br').remove();
    
    
    //usuwanie tylko jego zawartosci
    $('.paragraf').empty();
    
    
    //dodawanie CSS
    $('.paragrafnext').css({'font-size': '3em', 'color': 'red'});
    
    
    //dodawanie klasy
    $('h1').addClass('blue');
    
    
    //dodawanie atrybutu
    $('h1').attr('imie', 'Marcin');
    

                       
                       

                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
});