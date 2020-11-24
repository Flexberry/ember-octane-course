// import Transform from '@ember-data/serializer/transform';
import { DateTransform } from '@ember-data/serializer/-private';
import { inject as service } from '@ember/service';

export default class DateStringTransform extends DateTransform {
  @service moment;

  deserialize(serialized) {
    let date = super.deserialize(...arguments);
    if (date instanceof Date && !isNaN(date)) {
      let formattedDate = this.moment.moment(date).format('YYYY-MM-DD');
      return formattedDate;
    }

    return null;
  }

  serialize(deserialized) {
    let deserializedDate = deserialized ? this.moment.moment(deserialized).toDate() : null;
    return super.serialize.call(this, deserializedDate);
  }
}
