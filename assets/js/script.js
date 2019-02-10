//Navbar Initializer
$(document).ready(function(){
    $('.sidenav').sidenav();
});
//END: Navbar initializer

var ariel = document.getElementById('ariel');
var happen = document.getElementById('happen');
var shiba = document.getElementById('shiba');

var $myIntro = $('#myIntro');
var $myDesign = $('#myDesign');
var $shiba = $('#shiba');
var $section1 = $('#section1');
var $section2 = $('#section2');


var myFullpage = new fullpage('#fullpage', {
    // anchors: ['firstPage', 'secondPage', '3rdPage'],
    menu: '#menu',
    loopTop: true,
    loopBottom: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['About', 'Designs', 'Contact'],
    onLeave: function(origin, destination, direction) {
        if(origin.index == 0 && direction == 'down') {
            //animate first page down
            $myIntro.removeClass('fadeInLeft');
            $myDesign.addClass('fadeInLeft');
            $section2.addClass('fadeInRight');
        } else if (origin.index == 0 && direction == 'up') {
            //animate first page up
            $myIntro.removeClass('fadeInLeft');
            $shiba.addClass('fadeInLeft');
        } else if(origin.index == 1 && direction == 'down') {
            //animate second page down
            $myDesign.removeClass('fadeInLeft');
            $shiba.addClass('fadeInLeft');
        } else if (origin.index == 1 && direction == 'up') {
            //animate second page up
            $myDesign.removeClass('fadeInLeft');
            $myIntro.addClass('fadeInLeft');    
        } else if (origin.index == 2 && direction == 'down') {
            //animate third page down
            $shiba.removeClass('slideInLeft');
            $myIntro.addClass('fadeInLeft');
        } else if (origin.index == 2 && direction == 'up') {
            //animate third page up
            $shiba.removeClass('slideInLeft');
            $myDesign.addClass('fadeInLeft');
        }
    }
});