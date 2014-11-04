import Ember from 'ember';

var ships = [{ id: 0, name: 'Dark Schneider' },
{ id: 1, name: 'Red Gazelle' },
{ id: 2, name: 'White Cat' },
{ id: 3, name: 'Golden Fox' },
{ id: 4, name: 'Iron Tiger' },
{ id: 5, name: 'Fire Stingray' },
{ id: 6, name: 'Wild Goose' },
{ id: 7, name: 'Blue Falcon' },
{ id: 8, name: 'Deep Claw' },
{ id: 9, name: 'Great Star' },
{ id: 10, name: 'Little Wyvern' },
{ id: 11, name: 'Mad Wolf' },
{ id: 12, name: 'Super Piranha' },
{ id: 13, name: 'Death Anchor' },
{ id: 14, name: 'Astro Robin' },
{ id: 15, name: 'Big Fang' },
{ id: 16, name: 'Sonic Phantom' },
{ id: 17, name: 'Green Panther' },
{ id: 18, name: 'Hyper Speeder' },
{ id: 19, name: 'Space Angler' },
{ id: 20, name: 'King Meteor' },
{ id: 21, name: 'Queen Meteor' },
{ id: 22, name: 'Twin Noritta' },
{ id: 23, name: 'Night Thunder' },
{ id: 24, name: 'Wild Boar' },
{ id: 25, name: 'Blood Hawk' },
{ id: 26, name: 'Wonder Wasp' },
{ id: 27, name: 'Mighty Typhoon' },
{ id: 28, name: 'Mighty Hurricane' },
{ id: 29, name: 'Crazy Bear' },
{ id: 30, name: 'Black Bull' },
{ id: 31, name: 'Fat Shark' },
{ id: 32, name: 'Cosmic Dolphin' },
{ id: 33, name: 'Pink Spider' },
{ id: 34, name: 'Magic Seagull' },
{ id: 35, name: 'Silver Rat' },
{ id: 36, name: 'Spark Moon' },
{ id: 37, name: 'Bunny Flash' },
{ id: 38, name: 'Groovy Taxi' },
{ id: 39, name: 'Rolling Turtle' },
{ id: 40, name: 'Rainbow Phoenix' }];

export default Ember.Controller.extend({
  queryParams: ['excluded'],
  excluded: null,
  machines: ships,

  availableMachines: function () {
    var excluded = this.get('excluded').split(",").map(function(i) { return parseInt(i,10); });
    var machines = this.get('machines');

    if (!excluded) { return machines; }

    return machines.filter(function (item) {
      return !excluded.contains(item.id);
    });
  }.property('excluded','machines'),

  excludedMachines: function () {
    var excluded = this.get('excluded').split(",").map(function(i) { return parseInt(i,10); });
    var machines = this.get('machines');

    if (!excluded) { return machines; }

    return machines.filter(function (item) {
      return excluded.contains(item.id);
    });
  }.property('excluded','machines')

});
