import Ember from 'ember';
import jv from 'npm:jet-vermillion-generator';
import computed from 'ember-computed-decorators';

const { Component } = Ember;

export default Component.extend({
  classNames: ['generator'],
  queryParams: ['username'],

  username: '',

  @computed('username')
  generatedCode(username) {
    return jv.generate(username);
  }
});
