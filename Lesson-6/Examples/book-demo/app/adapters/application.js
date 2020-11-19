import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'books-demo/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.APP.backEndURL;
  headers = {
    'Content-Type': 'application/json'
  };

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
