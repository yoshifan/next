import Ember from "ember";
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('jet-vermillion-code', 'JetVermillionCodeComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it generates code for username "LOCKS"', function() {
  expect(1);

  // creates the component instance
  var component = this.subject();

  // appends the component to the page
  var $component = this.append();

  Ember.run(function() {
    component.set('username', 'LOCKS');
  });
  equal($component.find('[name=vermillion-code]').val(), 'W-XX9NV8A+30');
});
