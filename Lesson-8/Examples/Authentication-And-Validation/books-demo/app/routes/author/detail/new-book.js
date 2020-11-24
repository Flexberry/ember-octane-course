import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class AuthorDetailNewBookRoute extends Route.extend(AuthenticatedRouteMixin) {
  model() {
    const author = this.modelFor('author.detail');

    return {
      author,
      book: {
        title: '',
        isbn: '',
        publishDate: '',
        author
      }
    }
  }
}
