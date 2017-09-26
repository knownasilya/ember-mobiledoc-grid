import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mobiledoc-grid-toolbar', 'Integration | Component | mobiledoc grid toolbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mobiledoc-grid-toolbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mobiledoc-grid-toolbar}}
      template block text
    {{/mobiledoc-grid-toolbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
