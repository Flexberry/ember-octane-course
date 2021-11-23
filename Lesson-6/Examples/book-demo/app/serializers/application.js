import JSONSerializer from '@ember-data/serializer/json';
import { isNone } from '@ember/utils';


export default class ApplicationSerializer extends JSONSerializer {
  normalize(model, hash) {
    return super.normalize(...arguments);
  }

  keyForRelationship(key, typeClass, method) {
    if (typeClass === 'belongsTo') {
      return `${key}Id`;
    }

    return super.keyForRelationship(...arguments);
  }

  extractRelationship(relationshipModelName, relationshipHash) {
    // let hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
    // return super.extractRelationship.call(this, relationshipModelName, hash);
    return super.extractRelationship(...arguments);
  }

  serializeBelongsTo(snapshot, json, relationship) {
    // super.serializeBelongsTo(...arguments);
    let key = relationship.key;
    let belongsTo = snapshot.belongsTo(key);

    key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
    json[key] = isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
    json[this.primaryKey] = parseInt(json[this.primaryKey]);
  }
}
