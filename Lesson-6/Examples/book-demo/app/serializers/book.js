import ApplicationSerializer from './application';
import { isNone } from '@ember/utils';

export default class BookSerializer extends ApplicationSerializer {
  normalize(model, hash) {
    hash = super.normalize(...arguments);
    return hash;
  }

  serialize() {
    const hash = super.serialize(...arguments);
    return hash;
  }
}
