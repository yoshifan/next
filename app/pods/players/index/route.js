import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model(params) {
    var players;

    if (params.page) {
      players = this.store.query('player', params);
    } else {
      players = this.store.findAll('player');
    }

    return players;
  }
});
