import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailController extends Controller {
  @service session;

  @action
  async deleteAuthor() {
    try {
      let books = this.model.books.toArray();

      await this.model.destroyRecord();

      books.forEach(book => {
        book.unloadRecord();
      });

      this.transitionToRoute('author.index');
    }
    catch(e) {
      this.send('error', e);
    }
  }
}
