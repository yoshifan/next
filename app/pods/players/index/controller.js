import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  page: 1,
  queryParams: ['page'],
  playersLoading: true,

  actions: {
    previous(page) {
      this.set('page', page-1);
    },

    next(page) {
      this.set('page', page+1);
    }
  }
});
