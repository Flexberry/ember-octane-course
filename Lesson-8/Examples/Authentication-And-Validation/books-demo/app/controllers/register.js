import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {
  @tracked errors;

  @action
  async saveUser(user) {
    let newUser;
    try {
      newUser = this.store.createRecord('user', user);
      await newUser.save();

      this.transitionToRoute('login');
    }
    catch(e) {
      e.user = newUser;
      this.send('error', e);
    }
  }

  @action
  error(error, transition) {
    this.errors = error.user.errors;
    return false;
  }

  resetErrors() {
    this.errors = {};
  }
}
