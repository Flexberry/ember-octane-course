import Controller from '@ember/controller';
import { action } from '@ember/object';
import { assign } from '@ember/polyfills';

export default class AuthorEditController extends Controller {
  @action
  async saveAuthor(author) {
    try {
      assign(this.model, author);
      await this.model.save();

      this.transitionToRoute('author.index');
    }
    catch(e) {
      this.send('error', e);
    }
  }
}
