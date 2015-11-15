import Ember from 'ember';
import { generate } from 'npm:jet-vermillion-generator';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['generator'],

  username: '',
  generatedCode: computed('username', function() {
    return generate(this.get('username'));
  })
});
