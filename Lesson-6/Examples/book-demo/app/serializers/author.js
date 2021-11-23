import ApplicationSerializer from "./application";

import { EmbeddedRecordsMixin } from "@ember-data/serializer/rest";

export default class AuthorSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
  attrs = {
    books: {
      deserialize: 'records',
      serialize: false
    }
  };

  normalize(model, hash) {
    hash = super.normalize(...arguments);

    return hash;
  }

  serialize() {
    const hash = super.serialize(...arguments);
    return hash;
  }
}
