import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page'],
  playersLoading: true,
});
