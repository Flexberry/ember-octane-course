import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';


export default class BookController extends Controller {
  queryParams = ['search'];
  @tracked search  = '';

  @tracked isLoading;
  @tracked isError;
  @tracked error;

}
