import Ember from 'ember';

export default Ember.Controller.extend(Ember.SortableMixin, {
  sortedEntries: Ember.computed('model.entries.[]', function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['srprScore'],
      sortAscending: false,
      content: this.get('model.entries')
    });
  })
});
