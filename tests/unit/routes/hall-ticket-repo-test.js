import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | HallTicketRepo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hall-ticket-repo');
    assert.ok(route);
  });
});
