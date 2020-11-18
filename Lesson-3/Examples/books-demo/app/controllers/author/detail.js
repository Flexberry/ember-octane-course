import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailController extends Controller {
  @service dataService;

  @action
  async deleteAuthor(id) {
    try {
      await this.dataService.deleteAuthor(id);

      this.transitionToRoute('author');
    }
    catch(e) {
      this.send('error', e);
    }
  }
}
