import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthorFormComponent extends Component {
  @tracked firstName = this.args.firstName;
  @tracked lastName = this.args.lastName;

  @action
  async saveAuthor(e) {
    e.preventDefault();

    this.args.onSubmit({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
}
