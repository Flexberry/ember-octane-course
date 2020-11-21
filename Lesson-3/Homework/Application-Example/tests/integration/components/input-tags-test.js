import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | input-tags', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.tags = ['first', 'second'];

    await render(hbs`<InputTags @tags={{this.tags}} />`);
    console.log(this.element);
    console.log(this.element.textContent);
    let tagElements = this.element.querySelectorAll("span.badge-info");


    assert.equal(tagElements.length, this.tags.length);
    // assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    // await render(hbs`
    //   <InputTags>
    //     template block text
    //   </InputTags>
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
