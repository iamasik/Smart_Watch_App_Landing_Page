$(document).ready(function(){
    $('.menu-button').on('click',function(){
        $('.mid-menu').fadeToggle();
        $(this).hide();
        $('.close-button').show();
    })
    $('.close-button').on('click',function(){
        $(this).hide();
        $('.mid-menu').hide();
        $('.menu-button').show();
    })

})