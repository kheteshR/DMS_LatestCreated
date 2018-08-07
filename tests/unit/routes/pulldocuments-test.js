import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pulldocuments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pulldocuments');
    assert.ok(route);
  });
});
