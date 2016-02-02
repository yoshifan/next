import { timeInMinutes } from '../../../helpers/time-in-minutes';
import { module, test } from 'qunit';

module('Unit | Helper | time in minutes');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);

  var result = timeInMinutes([2037360]);
  assert.equal(result, `33'57"360`);
});
