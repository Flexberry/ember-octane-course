import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

import { later } from '@ember/runloop';

export default class AuthorRoute extends Route {
  @service dataService;
  queryParams = {
    search: {
      refreshModel: true
    }
  }

  async model({ search }) {
    let promise = new Promise((resolve, reject) => {
        later(() => {
          resolve(this.dataService.readAuthors(search));
        }, 2000);
    }).
    then((data) => {
      this.controller.model = data;
    }).
    catch((e) => {
      // this.send('error', e);
      this.controller.isError = true;
      this.controller.error = e.message;
    }).
    finally(() => {
      if (promise === this.lastPromise) {
        this.controller.isLoading = false;
      }
    });

    this.lastPromise = promise;
    return {
      isLoading: true
    }
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.isLoading = true;
    controller.isError = false;
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.isError = false;
      controller.isLoading = false;
      this.lastPromise = false;
    }
  }

  @action
  loading() {
    return false;
  }
}
