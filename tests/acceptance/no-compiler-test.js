import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-twiddle/tests/helpers/start-app';

module('Acceptance | no template compiler', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Able to load a gist without a template compiler', function(assert) {

  const files = [
    {
      filename: "application.template.hbs",
      content: "Hello, World!"
    },
    {
      filename: 'twiddle.json',
      content: "{\n  \"version\": \"0.4.0\",\n  \"dependencies\": {\n    \"jquery\": \"https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.js\",\n    \"ember\": \"https://cdnjs.cloudflare.com/ajax/libs/ember.js/1.13.6/ember.js\"\n  }\n}"
    }
  ];

  runGist(files);

  andThen(function() {
    const outputDiv = 'div';

    assert.equal(outputContents(outputDiv), 'Hello, World!', 'Gist with no template compiler is displayed');
  });
});
