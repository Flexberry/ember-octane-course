import { tracked } from '@glimmer/tracking';

export default class AuthorModel {
  @tracked firstName = '';
  @tracked lastName = '';
}
