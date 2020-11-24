import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorCreateController extends Controller {
  @action
  async saveAuthor(author) {
    try {
      let newAuthor = this.store.createRecord('author', author);
      await newAuthor.save();

      this.transitionToRoute('author.index');
    }
    catch(e) {
      this.send('error', e);
    }
  }
}
