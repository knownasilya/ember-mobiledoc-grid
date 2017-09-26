import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  actions: {
    addRow() {
      this.editor.addCard('grid-cards-row');
    }
  }
});
