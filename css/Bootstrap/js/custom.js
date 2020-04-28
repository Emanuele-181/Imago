$(document).ready(function (){
    jQuery('.container') .addClass("hidden") .viewportChecker({ 
        classToAdd: 'visible animated slideInLeft', 
        offset: 100 
    });
});