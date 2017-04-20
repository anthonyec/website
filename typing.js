(function() {

var SEQUENCE = [
  'chatbots',
  'nodejs',
  'work',
];

var $span = document.querySelectorAll('.js-span')[0];

function render(text) {
  $span.dataset.text = text;
  $span.innerText = text;
}

function typeText(text, callback) {
  var index = 0;
  var typedText = '';

  var typingInterval = setInterval(function() {
    render(typedText);

    if (index < text.length) {
      typedText += text[index];
      index++;
    } else {
      clearInterval(typingInterval);
      callback();
    }
  }, 100);

  render(typedText);
}

function selectText(callback) {
  $span.classList.add('animate');

  var animationTimeout = setTimeout(function() {
    $span.classList.remove('animate');
    clearInterval(animationTimeout);
    callback();
  }, 600);
}

function deleteText() {
  $span.dataset.text = '';
  $span.innerText = '';
}

function end() {
  selectText(function() {
    deleteText();
  });
}

function sequence(index) {
  if (index >= SEQUENCE.length) {
    end();
    return;
  }

  var text = SEQUENCE[index];

  typeText(text, function() {
    selectText(function() {
      sequence(index + 1);
    });
  });
}

sequence(0);

})();
