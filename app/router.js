import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('games', function() { });
  this.resource('game', { path: 'games/:game_id' }, function() { });
  this.resource('player', { path: 'players/:player_id' }, function() { });
  this.resource('fzgx/randomizer', function() { });
  this.route('fzmv/faq');
});

export default Router;
