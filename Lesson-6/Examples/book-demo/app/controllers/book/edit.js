import Controller from '@ember/controller';
import { action } from '@ember/object';
import { assign } from '@ember/polyfills';

export default class BookEditController extends Controller {
  @action
  async saveBook(book) {
    try {
      assign(this.model, book);
      await this.model.save();

      this.transitionToRoute('book.index');
    }
    catch(e) {
      this.send('error', e);
    }
  }
}
