$(document).keydown(function(e) {
    if(!$(':focus').is('input') && !$(':focus').is('select') && !$(':focus').is('textarea')) {
        // N
        if(!e.ctrlKey && !e.altKey && !e.shiftKey && e.keyCode == 78) {
            $(location).attr('href', $('.icon-add').attr('href'));
            e.preventDefault();
        } // if
    } // if
});
