import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | AppForm', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app-form');
    assert.ok(route);
  });
});
