import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import { tracked } from '@glimmer/tracking';

export default class AuthorCreateController extends Controller {
  @service dataService;

  @tracked firstName;
  @tracked lastName;

  @action
  async saveAuthor(e) {
    e.preventDefault();

    await this.dataService.createAuthor(this.model);

    this.transitionToRoute('author');
  }

  @action
  changeFirstName(firstName) {
    this.model.firstName = firstName;
  }

  // reset() {
  //   this.firstName='';
  //   this.lastName='';
  // }
}
