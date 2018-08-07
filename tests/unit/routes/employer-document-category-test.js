import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | EmployerDocumentCategory', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:employer-document-category');
    assert.ok(route);
  });
});
