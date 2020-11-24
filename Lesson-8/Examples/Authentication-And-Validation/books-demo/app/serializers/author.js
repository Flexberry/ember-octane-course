import ApplicationSerializer from './application';

import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class AuthorSerializer extends ApplicationSerializer {
  // attrs = {
  //   books: {
  //     deserialize: 'records',
  //     serialize: 'ids'
  //   }
  // };

  normalize(model, hash) {
    hash = super.normalize(...arguments);
    // let hashCopy = Object.assign({}, hash);
    // hashCopy.id = '' + hashCopy.id;
    // hashCopy.type = model.modelName;
    // hashCopy.attributes = {};
    // hashCopy.relationships = {};
    // hashCopy.attributes.firstName = hashCopy.firstName;
    // hashCopy.attributes.lastName = hashCopy.lastName;
    // delete hashCopy.firstName;
    // delete hashCopy.lastName;

    // hashCopy.relationships.book = {};
    // hashCopy.relationships.book.data = [];

    // hash = {
    //   data: hashCopy
    // };

    return hash;
  }
}
