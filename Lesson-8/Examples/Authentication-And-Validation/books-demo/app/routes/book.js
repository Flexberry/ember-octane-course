import Route from '@ember/routing/route';
import { action } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class BookRoute extends Route.extend(AuthenticatedRouteMixin) {
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
