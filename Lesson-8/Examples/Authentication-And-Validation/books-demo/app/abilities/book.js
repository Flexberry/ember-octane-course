import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';

export default class AuthorController extends Ability {
  @service currentUser;
  @service session;

  /// only the person who wrote a post can edit it
  get canEdit() {
    if (!this.session.isAuthenticated) {
      return false;
    }

    return this.model.user.then((user) => {
      return user.username === this.currentUser.user.username;
    });
  }
}
