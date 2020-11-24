import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RegisterFormComponent extends Component {
  email = this.args.user.email;
  username = this.args.user.username;
  password = this.args.user.password;
  passwordConfirmation = this.args.user.passwordConfirmation;

  @action
  saveUser(e) {
    e.preventDefault();

    this.args.onSubmit({
      email: this.email,
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    });
  }
}
