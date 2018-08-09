import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | hall-ticket-repo', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:hall-ticket-repo');
    assert.ok(controller);
  });
});
