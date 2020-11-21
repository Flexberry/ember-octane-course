import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | init-input-tags-events', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.tags = ['first', 'second'];
    await render(hbs`<div {{init-input-tags-events this.tags}}></div>`);

    assert.ok(true);
  });
});
