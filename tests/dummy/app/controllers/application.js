import Controller from '@ember/controller';
import { computed } from '@ember/object';
import createComponentCard from 'ember-mobiledoc-editor/utils/create-component-card';

export default Controller.extend({
  cards: computed(function() {
    return [
      createComponentCard('grid-cards-row')
    ];
  })
});
