import Ember from 'ember';
var Router = Ember.Router.extend({
});

Router.map(function() {
  this.resource('characters', function() {
    this.resource('character', { path: '/:character_id' });
  });
});

export default Router;
