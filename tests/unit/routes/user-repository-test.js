import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | UserRepository', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user-repository');
    assert.ok(route);
  });
});
