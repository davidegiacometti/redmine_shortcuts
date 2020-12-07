// Process link click
function processLink(link, redirectLink = undefined) {
    if (link.attr('data-method') != undefined) {
        var method = link.attr('data-method');
        var href = link.attr('href');
        $.ajax({
            type: method,
            url: href,
            datatype: 'text/javascript',
            xhrFields: {
                withCredentials: true
            },
            headers: {
                Accept: 'text/javascript'
            },
            complete: function () {
                if (redirectLink != undefined) {
                    $(location).attr('href', redirectLink);
                }
            }
        });
    } else if (link.attr('onclick')) {
        link.trigger('click');
    } else {
        $(location).attr('href', link.attr('href'));
    }
}

$(document).keydown(function (e) {
    if (!$(':focus').is('input') && !$(':focus').is('select') && !$(':focus').is('textarea')) {
        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
            // C
            if (e.keyCode == 67) {
                processLink($('.icon-copy').first());
                e.preventDefault();
            // D
            } else if (e.keyCode == 68) {
                var link = $('.icon-del').first();
                var dataConfirm = link.attr('data-confirm');
                if (dataConfirm != undefined) {
                    if (!confirm(dataConfirm)) {
                        return;
                    }
                }
                processLink(link, '/issues');
                e.preventDefault();
            // E
            } else if (e.keyCode == 69) {
                processLink($('.icon-edit').first());
                e.preventDefault();
            // L
            } else if (e.keyCode == 76) {
                processLink($('.icon-time-add').first());
                e.preventDefault();
            // W
            } else if (e.keyCode == 87) {
                processLink($('.icon-fav-off').first());
                e.preventDefault();
            // U
            } else if (e.keyCode == 85) {
                processLink($('.icon-fav').first());
                e.preventDefault();
            // Q
            } else if (e.keyCode == 81) {
                processLink($('.icon-comment').first());
                e.preventDefault();
            }
        }
    }
});
