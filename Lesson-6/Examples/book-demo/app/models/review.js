import Model, { attr, belongsTo }from '@ember-data/model';
import { inject as service } from '@ember/service';

export default class ReviewModel extends Model {
  @service moment;

  @attr('string') user;
  @attr('string') body;
  @attr('date-string', {
    defaultValue(model) {
      return model.moment.moment(new Date()).format('YYYY-MM-DD');
    }
  }) createdAt;

  @belongsTo('book') book;
}
