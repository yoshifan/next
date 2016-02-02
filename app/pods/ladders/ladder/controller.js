import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  queryParams: ['sortBy', 'sortOrder'],
  sortBy: 'srpr',
  sortOrder: 'desc',

  totalsSorting: ['srpr:desc'],
  sortedEntries: computed.sort('model.totals', 'totalsSorting'),

  actions: {
    switchSorting(key) {
      const [currentKey, desc] = this.get('totalsSorting')[0].split(':');

      if (currentKey === key && !desc) {
        this.set('totalsSorting', [`${key}:desc`]);
        this.set('sortBy', key);
        this.set('sortOrder', 'desc');

        return;
      }

      this.set('totalsSorting', [key]);
      this.set('sortBy', key);
      this.set('sortOrder', 'asc');
    }
  }
});
