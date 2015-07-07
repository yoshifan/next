import Ember from 'ember';

const machines = [{ id: 0, name: 'Dark Schneider' },
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

const maps = [{ id: 0, name: "Mute City Twist Road" },
{ id: 1, name: "Casino Palace Split Oval" },
{ id: 2, name: "Sand Ocean Surface Slide" },
{ id: 3, name: "Lightning Loop Cross" },
{ id: 4, name: "Aeropolis Multiplex" },
{ id: 5, name: "Big Blue Drift Highway" },
{ id: 6, name: "Port Town Aero Dive" },
{ id: 7, name: "Green Plant Mobius Ring" },
{ id: 8, name: "Port Town Long Pipe" },
{ id: 9, name: "Mute City Serial Gaps" },
{ id: 10, name: "Fire Field Cylinder Knot" },
{ id: 11, name: "Green Plant Intersection" },
{ id: 12, name: "Casino Palace Double Branches" },
{ id: 13, name: "Lightning Half Pipe" },
{ id: 14, name: "Big Blue Ordeal" },
{ id: 15, name: "Cosmo Terminal Trident" },
{ id: 16, name: "Sand Ocean Lateral Shift" },
{ id: 17, name: "Fire Field Undulation" },
{ id: 18, name: "Aeropolis Dragon Slope" },
{ id: 19, name: "Phantom Road Slim-Line Slits" },
{ id: 20, name: "Aeropolis Screw Drive" },
{ id: 21, name: "Outer Space Meteor Stream" },
{ id: 22, name: "Port Town Cylinder Wave" },
{ id: 23, name: "Lightning Thunder Road" },
{ id: 24, name: "Green Plant Spiral" },
{ id: 25, name: "Mute City Sonic Oval" }];

const cups = [{ id: 0, name: "Ruby" },
{ id: 1, name: "Sapphire" },
{ id: 2, name: "Emerald" },
{ id: 3, name: "Diamond" },
{ id: 4, name: "AX" }];

export default Ember.Controller.extend({
  queryParams: ['excludedCupsParam', 'excludeMachines', 'excludeMaps'],

  excludedCupsParam: [],
  excludeMachines: [],
  excludeMaps: [],

  cups: null,
  machines: null,
  maps: null,

  initializeProperties: Ember.on('init', function() {
    this.set('cups', cups);
    this.set('machines', machines);
    this.set('maps', maps);
  }),

  availableCups: function() {
    const excludedCupsParam = this.get('excludedCupsParam');
    const cups = this.get('cups');

    if (!excludedCupsParam) { return cups; }

    return cups.filter(function (item) {
      return !excludedCupsParam.contains(item.id);
    });

}.property('excludedCupsParam', 'cups'),

  excludedCups: function () {
    const excludedCupsParam = this.get('excludedCupsParam');
    const cups = this.get('cups');

    if (!excludedCupsParam) { return cups; }

    return cups.filter(function (item) {
      return excludedCupsParam.contains(item.id);
    });
  }.property('excludedCupsParam','cups'),

  availableMachines: function () {
    const excludeMachines = this.excludeMachines;
    const machines = this.get('machines');

    if (!excludeMachines) { return machines; }

    return machines.filter(function (item) {
      return !excludeMachines.contains(item.id);
    });
  }.property('excludeMachines','machines'),

  excludedMachines: function () {
    const excludeMachines = this.excludeMachines;
    const machines = this.get('machines');

    if (!excludeMachines) { return machines; }

    return machines.filter(function (item) {
      return excludeMachines.contains(item.id);
    });
  }.property('excludeMachines','machines'),

  availableMaps: function () {
    const excludeMaps = this.excludeMaps;
    const maps = this.get('maps');

    if (!excludeMaps) { return maps; }

    return maps.filter(function (item) {
      return !excludeMaps.contains(item.id);
    });
  }.property('excludeMaps','maps'),

  excludedMaps: function () {
    const excludeMaps = this.excludeMaps;
    const maps = this.get('maps');

    if (!excludeMaps) { return maps; }

    return maps.filter(function (item) {
      return excludeMaps.contains(item.id);
    });
  }.property('excludeMaps','maps'),

  actions: {
    addElement(collection, element) {
      collection.removeObject(element.id);
    },
    removeElement(collection, element) {
      collection.pushObject(element.id);
    }
  }

});
