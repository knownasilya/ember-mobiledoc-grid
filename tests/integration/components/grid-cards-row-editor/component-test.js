import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('grid-cards-row-editor', 'Integration | Component | grid cards row editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{grid-cards-row-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#grid-cards-row-editor}}
      template block text
    {{/grid-cards-row-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
