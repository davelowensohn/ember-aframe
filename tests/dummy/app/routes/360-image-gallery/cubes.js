import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    transition.send('updateSrc', '#cubes');
  }
});
