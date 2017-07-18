import { scoreDifferential } from '../../../helpers/score-differential';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Helper | score differential');

test('it calculates the differential', function(assert) {
  const entries = [Ember.Object.create({ srpr: 50 })];
  const index = 1;
  const score = 20;
  const result = scoreDifferential([entries, index, score]);

  assert.equal(result, -30);
});
