var $ = require('jquery');

$(document).ready(function(){
    $('header .mobile .burger').on('click', function() {
        $('ul.mobile-dropdown').toggleClass('active');
    });

    console.log('successfully loaded');

});



