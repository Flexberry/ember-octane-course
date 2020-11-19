import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class BookRoute extends Route {
  queryParams = {
    search: {
      refreshModel: true
    }
  };

  model({ search }) {
    if (search) {
      return this.store.query('book', { q: search });
    }

    return this.store.findAll('book');
  }

  @action
  loading() {
    return false;
  }
}
