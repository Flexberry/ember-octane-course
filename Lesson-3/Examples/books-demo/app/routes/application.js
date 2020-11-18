import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @action
  error(error, transition) {
    if (transition) {
      transition.abort();
    }

    console.log(error);
    this.intermediateTransitionTo('error', { error: error.message });
    return true;
  }
}
