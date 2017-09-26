/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-mobiledoc-grid',

  included: function () {
    this._super.included.apply(this, arguments);
    this.import('vendor/flexboxgrid.css');
    this.import('vendor/ember-mobiledoc-grid.css');
  }
};
