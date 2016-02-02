import Ember from 'ember';

export function scoreDifferential([entries, index, score]/*, hash*/) {
  if (index === 0) { return; }
  const previousScore = entries.objectAt(index-1).get('srpr');

  return score - previousScore;
}

export default Ember.Helper.helper(scoreDifferential);
