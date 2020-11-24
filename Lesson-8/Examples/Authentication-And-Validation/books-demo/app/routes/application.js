import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-mixins
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class ApplicationRoute extends Route.extend(ApplicationRouteMixin) {
  @service session;
  @service currentUser;

  beforeModel() {
    super.beforeModel(...arguments);

    this.loadUser();
  }

  sessionAuthenticated() {
    super.sessionAuthenticated(...arguments);

    this.loadUser();
  }

  sessionInvalidated() {
    window.location.replace('/login');
  }

  @action
  error(error, transition) {
    if (transition) {
      transition.abort();
    }

    console.error(error);
    this.intermediateTransitionTo('error', { error: error.message });
    return false;
  }

  loadUser() {
    if (this.session.isAuthenticated) {
      this.currentUser.load();
    }
  }
}
