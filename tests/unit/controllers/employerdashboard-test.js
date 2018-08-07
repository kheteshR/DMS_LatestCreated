import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | employerdashboard', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:employerdashboard');
    assert.ok(controller);
  });
});
