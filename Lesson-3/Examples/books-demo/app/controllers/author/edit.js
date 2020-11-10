import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorEditController extends Controller {
  @service dataService;

  @action
  async saveAuthor(e) {
    e.preventDefault();

    await this.dataService.changeAuthor(this.model);

    this.transitionToRoute('author');
  }

  @action
  changeFirstName(firstName) {
    this.model.firstName = firstName;
  }
}
