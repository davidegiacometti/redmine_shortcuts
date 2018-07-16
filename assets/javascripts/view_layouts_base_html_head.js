$(document).ready(function() {
    var href = $('a.redmine-shortcuts').attr('href');
    $('a.redmine-shortcuts').attr('onclick', "window.open('" + href + "', 'width=320', 'height=480');return false;");
});
