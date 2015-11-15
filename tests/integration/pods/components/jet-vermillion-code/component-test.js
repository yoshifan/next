import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('/jet-vermillion-code', 'Integration | Component | jet vermillion code', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('username', 'LOCKS');

  this.render(hbs`{{jet-vermillion-code username=username}}`);

  const code = this.$('input[name=vermillion-code]').val();

  assert.equal(code, 'W-XX9NV8A+30');
});
