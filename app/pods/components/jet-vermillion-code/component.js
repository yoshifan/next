import Ember from 'ember';
import jetVermillionGenerator from 'npm:jet-vermillion-generator';

const { Component, observer } = Ember;

export default Component.extend({
  classNames: ['generator'],

  username: '',
  generatedCode: '',

  generateCode: observer('username', function() {
    this.set('generatedCode', jetVermillionGenerator.generate(this.get('username')));
  })
});
