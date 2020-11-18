import Route from '@ember/routing/route';
import AuthorModel from '../../models/author-model';

export default class AuthorCreateRoute extends Route {
  model() {
    return new AuthorModel();
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    // controller.reset();
  }
}
