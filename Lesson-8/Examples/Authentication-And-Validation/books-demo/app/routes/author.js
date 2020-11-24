import Route from '@ember/routing/route';
import { action } from '@ember/object';

import { later } from '@ember/runloop';

export default class AuthorRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true
    }
  }

  async model({ search }) {
    if (search) {
      return this.store.query('author', { q: search });
    }

    return this.store.findAll('author');
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    // controller.isLoading = true;
    // controller.isError = false;
  }

  resetController(controller, isExiting) {
    super.resetController(...arguments);
    // if (isExiting) {
    //   controller.isError = false;
    //   controller.isLoading = false;
    //   this.lastPromise = false;
    // }
  }

  @action
  loading() {
    return false;
  }
}
