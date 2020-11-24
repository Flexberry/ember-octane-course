import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorDetailNewBookController extends Controller {
  @action
  async saveBook(e) {
    try {
      e.preventDefault();
      let newBook = this.store.createRecord('book', this.model.book);
      await newBook.save();

      this.transitionToRoute('author.detail', this.model.author.id);
    }
    catch(e) {
      this.send('error', e);
    }
  }
}
