import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  sortedEntries: computed.sort('model.entries', function(a, b) {
    if (a.get('srprScore') < b.get('srprScore')) {
      return 1;
    } else {
      return -1;
    }

    return 0;
  })
});
