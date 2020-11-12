import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    console.log('Hello');
  }
}
