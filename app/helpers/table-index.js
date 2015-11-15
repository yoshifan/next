import Ember from 'ember';

export function tableIndex(params/*, hash*/) {
  const [index] = params;

  return index+1;
}

export default Ember.Helper.helper(tableIndex);
