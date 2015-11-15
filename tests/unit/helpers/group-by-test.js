import { groupBy } from '../../../helpers/group-by';
import { module, test } from 'qunit';

module('Unit | Helper | group by');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);

  const result = groupBy([{ id: 1, group: 'one' }, { id: 2, group: 'two' }, { id: 3, group: 'one' }],
                         'group');

  assert.equal(result, {
    one: [{ id: 1, group: 'one' }, { id: 3, group: 'one' }],
    two: [{ id: 2, group: 'two' }]
  });
});
