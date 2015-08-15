import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model(params) {
    var players;

    if (params.page) {
      players = this.store.queryAll('player', params);
    } else {
      players = this.store.findAll('player');
    }

    return players;
  }
});
