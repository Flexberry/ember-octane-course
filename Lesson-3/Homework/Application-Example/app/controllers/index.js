import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked tags = ['first', 'второй'];

  @action
  changeTags(newTags) {
    this.tags = [...newTags];
    console.log(this.tags);
  }

  @action
  change() {
    this.tags = ['1', '2', '3'];
  }
}
