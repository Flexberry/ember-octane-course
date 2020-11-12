import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorController extends Controller {
  queryParams = ['search'];

  @tracked search = '';
  @tracked isLoading;

  @tracked firstName = '';
}
