import Ember from 'ember';
var Router = Ember.Router.extend({
  location: 'http://0.0.0.0:4200/'.locationType
});

Router.map(function() {
  this.resource('employment');
  this.resource('event');
  this.resource('faq');
  this.resource('home', {path:'/'});
  this.resource('party-packages', function() {
    this.resource('quick_visit');
    this.resource('princess_package');
    this.resource('queen_package');
    this.resource('royal_package');
  });
  this.resource('for-parents');
  this.resource('pictures');
  this.resource('posts');
  this.resource('characters', function() {
    this.resource('characters', {path: '/:character_id'});
  });
});

export default Router;
