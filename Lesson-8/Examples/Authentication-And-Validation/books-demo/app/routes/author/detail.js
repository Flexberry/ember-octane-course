import Route from '@ember/routing/route';

export default class AuthorDetailRoute extends Route {
  model({ id }) {
    return this.store.findRecord('author', id/*, { adapterOptions: { somedata: 'somevalue'} }*/);
  }
}
