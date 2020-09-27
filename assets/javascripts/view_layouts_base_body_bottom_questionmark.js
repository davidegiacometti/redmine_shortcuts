// Question Mark.
$questionMarkModalRoot = $('<div class="question-mark-modal-root"></div>');
$questionMarkModal = $('<div class="question-mark-modal"><span aria-label="Close" aria-role="button" class="question-mark--close"/></div>')
$questionMarkModalRoot.append($questionMarkModal);
$questionMarkModal.append('<iframe width="500px" height="500px" src="' + window.location.origin + '/redmine_shortcuts/help"></iframe>');
$('body').append($questionMarkModalRoot);
$(document).on('keypress', function(e) {
  e = e || window.event;
  var charCode = e.keyCode || e.which;
  // 63 = '?' key
  if (charCode === 63 && !$(':focus').is('textarea, input')) {
    $questionMarkModalRoot.toggleClass('question-mark-modal-visible');
  }
});
$(document).on('keyup', function(e) {
  e = e || window.event;
  var charCode = e.keyCode || e.which;
  // 27 = 'Esc' key
  if (charCode === 27) {
    $questionMarkModalRoot.removeClass('question-mark-modal-visible');
  }
});
$('.question-mark--close').click(function() {
  $questionMarkModalRoot.removeClass('question-mark-modal-visible');
});

$questionMarkModalRoot.click(function() {
  $(this).removeClass('question-mark-modal-visible');
});

$questionMarkModal.click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  return false;
});
