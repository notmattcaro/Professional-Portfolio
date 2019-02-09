var ariel = document.getElementById('ariel');
var happen = document.getElementById('happen');
var shiba = document.getElementById('shiba');


var myFullpage = new fullpage('#fullpage', {
    // anchors: ['firstPage', 'secondPage', '3rdPage'],
    menu: '#menu',
    loopTop: true,
    loopBottom: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['About', 'Designs', 'Contact'],
    onLeave: function(index, nextIndex, direction) {
        if(index == 1) {
            //animate first page
            ariel.classList.add('animated rubberBand');

        } else if(index == 1 && nextIndex == 2) {
            //animate second page
            window.alert("hi");
            ariel.classList.remove('animated rubberBand');
            happen.classList.add('animated slidInRight');

        } else if (index == 2 && nextIndex == 3) {
            //animate third page
            window.alert("okay hi again");
            happen.classList.remove('animated slideInRight');
            shiba.classList.add('animated slideInLeft');

        } 
        // else if (index == 3 && nextIndex == 1) {
        //     //animate first page again if needed
            
        // }
    }
});
