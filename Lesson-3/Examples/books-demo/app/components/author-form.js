import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { next } from '@ember/runloop';


export default class AuthorFormComponent extends Component {
  @tracked _firstName;
  @tracked lastName;

  firstNameArgsPrevValue;

  get firstName() {
    if (this.firstNameArgsPrevValue !== this.args.firstName) {
      this.firstNameArgsPrevValue = this.args.firstName;
      next(this, () => {
        this._firstName = this.args.firstName;
      });
    }

    return this._firstName;
  }

  @action
  async saveAuthor(e) {
    e.preventDefault();

    //this.args.firstName = 'qqqq';

    this.args.onSubmit({
      firstName: this._firstName,
      lastName: this.args.lastName
    });
  }
}
