import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorEditController extends Controller {
  @service dataService;

  @action
  async saveAuthor(author) {
    let authorToSave = Object.assign({}, author);
    authorToSave.id = this.model.id;
    try {
      await this.dataService.changeAuthor(authorToSave);

      this.transitionToRoute('author');
    }
    catch(e) {
      this.send('error', e);
    }
  }

  @action
  changeFirstName(firstName) {
    this.model.firstName = firstName;
  }
}
