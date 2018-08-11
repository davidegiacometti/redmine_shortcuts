function styleSelectedText(textarea, string) {
    $start = textarea.prop('selectionStart');
    $end = textarea.prop('selectionEnd');
    $content = textarea.val();
    $content = $content.slice(0, $start) + string + $content.slice($start, $end) + string +  $content.slice($end, $content.length);
    textarea.val($content);
    textarea.focus();
    textarea.prop('selectionStart', $end + string.length * 2);
    textarea.prop('selectionEnd', $end + string.length * 2);
} // styleSelectedText

$(document).keydown(function(e) {
    if($(document.activeElement).hasClass('wiki-edit')) {
        // CTRL + B
        if(e.ctrlKey && e.keyCode == 66) {
            styleSelectedText($(document.activeElement), '*')
            e.preventDefault();
        // CTRL + S
        } else if(e.ctrlKey && e.keyCode == 83) {
            styleSelectedText($(document.activeElement), '-')
            e.preventDefault();
        // CTRL + U
        } else if(e.ctrlKey && e.keyCode == 85) {
            styleSelectedText($(document.activeElement), '+')
            e.preventDefault();
        // CTRL + I
        } else if(e.ctrlKey && e.keyCode == 73) {
            styleSelectedText($(document.activeElement), '_')
            e.preventDefault();
        } // if
    } // if
});
