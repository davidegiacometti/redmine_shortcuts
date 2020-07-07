// Question Mark.
$questionMarkModal = $('<div class="question-mark-modal"><span aria-label="Close" aria-role="button" class="question-mark--close"/></div>');
$questionMarkModal.append('<iframe width="500px" height="500px" src="' + window.location.origin + '/redmine_shortcuts/help"></iframe>');
$('body').append($questionMarkModal);
$(document).on('keypress', function(e) {
  e = e || window.event;
  var charCode = e.keyCode || e.which;
  // 63 = '?' key
  if (charCode === 63 && !$(':focus').is('textarea, input')) {
    $questionMarkModal.toggleClass('question-mark-modal-visible');
  }
});
$(document).on('keyup', function(e) {
  e = e || window.event;
  var charCode = e.keyCode || e.which;
  // 27 = 'Esc' key
  if (charCode === 27) {
    $questionMarkModal.removeClass('question-mark-modal-visible');
  }
});
$('.question-mark--close').click(function() {
  $questionMarkModal.removeClass('question-mark-modal-visible');
});