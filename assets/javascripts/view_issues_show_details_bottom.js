$(document).keydown(function(e) {
    if(!$(':focus').is('input') && !$(':focus').is('select') && !$(':focus').is('textarea')) {
        if(!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
            // C
            if(e.keyCode == 67) {
                $(location).attr('href', $('.icon-copy').attr('href'));
                e.preventDefault();
            // D
            } else if(e.keyCode == 68) {
                $('.icon-del').first().trigger('click');
                e.preventDefault();
            // E
            } else if(e.keyCode == 69) {
                $('.icon-edit').first().trigger('click');
                e.preventDefault();
            // L
            } else if(e.keyCode == 76) {
                $(location).attr('href', $('.icon-time-add').attr('href'));
                e.preventDefault();
            // W
            } else if(e.keyCode == 87) {
                $('.icon-fav-off').first().trigger('click');
                e.preventDefault();
            // U
            } else if(e.keyCode == 85) {
                $('.icon-fav').first().trigger('click');
                e.preventDefault();
            // Q
            } else if(e.keyCode == 81) {
                $('.icon-comment').first().trigger('click');
                e.preventDefault();
            } // if-else
        } // if
    } // if
});
