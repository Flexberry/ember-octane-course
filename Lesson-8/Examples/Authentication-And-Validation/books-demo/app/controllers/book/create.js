import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookCreateController extends Controller {
  @action
  async saveBook(book) {
    try {
      const newBook = this.store.createRecord('book', book);

      await newBook.save();

      this.transitionToRoute('book.index');
    }
    catch(e) {
      this.send('error', e)
    }
  }
}
