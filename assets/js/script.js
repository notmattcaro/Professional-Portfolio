$(document).ready(function () {
    //START: Modal Trigger
    $('.modal').modal();
    //END MODAL: Modal Trigger
    
    //START: Navbar Initializer
    $('.sidenav').sidenav();
    //END: Navbar Initializer

    var $section1 = $('#section1');
    var $section2 = $('#section2');
    var $section3 = $('#section3');
    var $portfolio = $('#portfolio-container');
    var isJump = false;

    function jumper(a = isJump, b= false) {
        a = b;
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
        };
    }
    $('#collaborate-button').on('click', function(event) {
        event.preventDefault();
        jumper(isJump, false);
    })

    var myFullpage = new fullpage('#fullpage', {
        licenseKey: '134CAE24-77144A32-A27AE634-9935A7A2',
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
                jumper();
            } else if (origin.index == 0 && direction == 'up') {
                //animate first page up
                $section3.addClass('fadeIn');
                jumper();
            } else if (origin.index == 1 && direction == 'down') {
                //animate second page down
                $section3.addClass('fadeIn');
                jumper();
            } else if (origin.index == 1 && direction == 'up') {
                //animate second page up  
            } else if (origin.index == 2 && direction == 'down') {
                //animate third page down
                jumper();
            } else if (origin.index == 2 && direction == 'up') {
                //animate third page up
                $section2.addClass('fadeInRight');
                $portfolio.addClass('fadeInLeft');
                jumper();
            }
        }
    });
});