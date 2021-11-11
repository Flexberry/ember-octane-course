import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  setupController(controller, model) {
    super.setupController(...arguments);
    controller.reset();
  }
}
