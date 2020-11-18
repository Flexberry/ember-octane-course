import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import { tracked } from '@glimmer/tracking';

export default class AuthorCreateController extends Controller {
  @service dataService;

  @tracked firstName;
  @tracked lastName;

  @action
  async saveAuthor(author) {
    console.log(`Author from component: firstName = ${author.firstName}, lastName = ${author.lastName}`)
    console.log(`Author from model: firstName = ${this.model.firstName}, lastName = ${this.model.lastName}`)
    try {
      await this.dataService.createAuthor(author);

      this.transitionToRoute('author');
    }
    catch(e) {
      this.send('error', e);
      // this.transitionToRoute('error', e.message);
    }
  }

  @action
  changeFirstName() {
    this.model.firstName = 'Some New Name';
  }

  // reset() {
  //   this.firstName='';
  //   this.lastName='';
  // }
}
