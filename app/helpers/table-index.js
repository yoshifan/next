import Ember from 'ember';

export function tableIndex([index]/*, hash*/) {
  return index+1;
}

export default Ember.Helper.helper(tableIndex);
