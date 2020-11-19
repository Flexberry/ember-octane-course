import ApplicationSerializer from "./application";

import { EmbeddedRecordsMixin } from "@ember-data/serializer/rest";

export default class AuthorSerializer extends ApplicationSerializer {
  // attrs = {
  //   books: {
  //     deserialize: 'records',
  //     serialize: 'ids'
  //   }
  // };

  normalize(model, hash) {
    hash = super.normalize(...arguments);

    return hash;
  }
}
