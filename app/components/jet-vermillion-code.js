import Ember from 'ember';
import jetVermillionGenerator from 'npm:jet-vermillion-generator';

export default Ember.Component.extend({
  classNames: ['generator'],

  username: '',
  generatedCode: '',

  generateCode: function() {
    this.set('generatedCode', jetVermillionGenerator.generate(this.get('username')));
  }.observes('username')
});
