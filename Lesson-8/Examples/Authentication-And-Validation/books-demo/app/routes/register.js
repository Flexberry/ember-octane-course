import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default class RegisterRoute extends Route.extend(UnauthenticatedRouteMixin) {
  model() {
    return {
      email: '',
      username: '',
      password: ''
    }
  }

  resetController(controller, isExiting, transition) {
    super.resetController(...arguments);
    if (isExiting) {
      controller.resetErrors();
    }
  }
}
