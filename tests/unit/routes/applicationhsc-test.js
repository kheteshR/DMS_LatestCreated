import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | applicationhsc', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:applicationhsc');
    assert.ok(route);
  });
});
