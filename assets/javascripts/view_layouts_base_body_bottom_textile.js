function styleSelectedText(textarea, prepend, append) {
    if (append == undefined) {
        append = prepend;
    }

    $start = textarea.prop('selectionStart');
    $end = textarea.prop('selectionEnd');
    $content = textarea.val();
    if ($content.slice(0, $start).endsWith(prepend) && $content.slice($end, $content.length).replace("\n", '').startsWith(append.replace("\n", ''))) {
        $content = $content.slice(0, $start - prepend.length) + $content.slice($start, $end) + $content.slice($end + append.length, $content.length);
        textarea.val($content);
        textarea.focus();
        textarea.prop('selectionStart', $start - prepend.length);
        var end =  
        textarea.prop('selectionEnd', $end - prepend.length);
    } else {
        $content = $content.slice(0, $start) + prepend + $content.slice($start, $end) + append + $content.slice($end, $content.length);
        textarea.val($content);
        textarea.focus();
        textarea.prop('selectionStart', $start + prepend.length);
        textarea.prop('selectionEnd', $end + prepend.length);
    }
}

$(document).keydown(function (e) {
    if ($(document.activeElement).hasClass('wiki-edit')) {
        if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
            // CTRL/CMD + B
            if (e.keyCode == 66) {
                styleSelectedText($(document.activeElement), '*');
                e.preventDefault();
            // CTRL/CMD + S
            } else if (e.keyCode == 83) {
                styleSelectedText($(document.activeElement), '-');
                e.preventDefault();
            // CTRL/CMD + U
            } else if (e.keyCode == 85) {
                styleSelectedText($(document.activeElement), '+');
                e.preventDefault();
            // CTRL/CMD + I
            } else if (e.keyCode == 73) {
                styleSelectedText($(document.activeElement), '_');
                e.preventDefault();
            // CTRL/CMD + L
            } else if (e.keyCode == 76) {
                styleSelectedText($(document.activeElement), '@');
                e.preventDefault();
            // CTRL/CMD + P
            } else if (e.keyCode == 80) {
                styleSelectedText($(document.activeElement), "<pre>\n", "\n</pre>");
                e.preventDefault();
            // CTRL/CMD + ENTER
            } else if (e.keyCode == 13) {
                $activeElement = $(document.activeElement)
                $activeElement.blur();
                $('textarea').removeData('changed');
                $activeElement.closest('form').submit();
                e.preventDefault();
            }
        }
    }
});
