import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNames: ['grid-row', 'editor'],

  mouseEnter() {
    this.set('showActions', true);
  },

  mouseLeave() {
    this.set('showActions', false);
  }
});
