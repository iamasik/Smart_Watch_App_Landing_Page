/*---------Striky------*/
$(document).ready(function(){
    $('.Fetaure').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('flot-nav');
        }else{
            $('nav').removeClass('flot-nav');
        }
    },{
        offset:'650px;'
    })
    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:5
            },
            1200:{
                items:5
            }
        }
    })
})
