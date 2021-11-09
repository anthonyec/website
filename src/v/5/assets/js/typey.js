function Typey(options) {
  var typey = {
    init() {
      this.options = options;
      this.options.target.setAttribute('data-text', '');
    },

    render(text) {
      this.options.target.dataset.text = text;
      this.options.target.innerText = text;
    },

    start() {
      this.sequence(0);
    },

    sequence(index) {
      var self = this;

      if (index < this.options.sequence.length) {
        var text = this.options.sequence[index];

        this.type(text, function() {
          self.select(function() {
            self.sequence(index + 1);
          });
        });
      } else {
        this.options.onStop();
      }
    },

    type(text, callback) {
      var self = this;
      var index = 0;
      var typedText = '';

      self.options.target.classList.add('typey--typing');

      var typingInterval = setInterval(function() {
        self.render(typedText);

        if (index < text.length) {
          typedText += text[index];
          index++;
        } else {
          clearInterval(typingInterval);
          self.options.target.classList.remove('typey--typing');

          setTimeout(function() {
            callback();
          }, 500);
        }
      }, 50);

      self.render(typedText);
    },

    select(callback) {
      var self = this;

      self.options.target.classList.add('typey--selecting');

      setTimeout(function() {
        self.options.target.classList.remove('typey--selecting');
        callback();
      }, 300);
    },
  }

  typey.init();
  return typey;
}
