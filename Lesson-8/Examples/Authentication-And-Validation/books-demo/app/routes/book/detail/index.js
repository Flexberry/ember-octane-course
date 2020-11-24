import Route from '@ember/routing/route';

export default class BookDetailIndexRoute extends Route {
  model() {
    return this.modelFor('book.detail');
  }
}
