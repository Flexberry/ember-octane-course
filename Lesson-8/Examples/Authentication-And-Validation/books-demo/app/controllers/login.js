import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;
  @tracked errors;

  @action
  async login(user) {
    try {
      await this.session.authenticate('authenticator:jwt', {
        email: user.email,
        password: user.password
      });
    }
    catch(e) {
      this.send('error', e);
    }
  }

  @action
  error(error, transition) {
    if (error instanceof Error) {
      return true;
    }

    this.errors = error.json.errors;
    return false;
  }

  resetErrors() {
    this.errors = {};
  }
}
