//Navbar Initializer
$(document).ready(function () {
    $('.sidenav').sidenav();
    //END: Navbar initializer

    var $section1 = $('#section1');
    var $section2 = $('#section2');
    var $section3 = $('#section3');
    var $portfolio = $('#portfolio-container');
    var isJump = false;

    function jumper() {
        if (isJump == true) {
            setInterval(function() {
                var bounce = 'animated bounce';
                var endAnimate = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $('.custom-buttons').addClass(bounce).one(endAnimate, function() {
                    $('.custom-buttons').removeClass(bounce);
                });
            }, 10 * 1000);
        } else if (isJump == false) {
            return;
        }
    }

    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#menu',
        loopTop: true,
        loopBottom: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['About', 'Designs', 'Contact'],
        onLeave: function (origin, destination, direction) {
            if (origin.index == 0 && direction == 'down') {
                //animate first page down
                $section2.addClass('fadeInRight');
                $portfolio.addClass('fadeInLeft');
                isJump = true;
                jumper();
            } else if (origin.index == 0 && direction == 'up') {
                //animate first page up
                $section3.addClass('fadeIn');
                isJump = true;
                jumper();
            } else if (origin.index == 1 && direction == 'down') {
                //animate second page down
                $section3.addClass('fadeIn');
                isJump = true;
                jumper();
            } else if (origin.index == 1 && direction == 'up') {
                //animate second page up  
            } else if (origin.index == 2 && direction == 'down') {
                //animate third page down
                isJump = false;
                jumper();
            } else if (origin.index == 2 && direction == 'up') {
                //animate third page up
                $section2.addClass('fadeInRight');
                $portfolio.addClass('fadeInLeft');
                isJump = false;
                jumper();
            }
        }
    });
});