import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'books-demo/config/environment';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = config.APP.backEndURL;

  get headers() {
    let resultHeaders = {
      'Content-Type': 'application/json'
    };

    if (this.session.isAuthenticated) {
      resultHeaders['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return resultHeaders;
  }

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = super.buildURL(...arguments);
    if (modelName === 'author' && requestType === 'findRecord' && id) {
      url += '?_embed=books';
    }

    if (modelName === 'book' && requestType === 'findRecord' && id) {
      url += '?_embed=reviews';
    }

    return url;
  }
}
