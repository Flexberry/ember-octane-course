import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BookDetailNewReviewController extends Controller {
  @action
  async saveReview(review) {
    try {
      const newReview = this.store.createRecord('review', review);

      await newReview.save();

      this.transitionToRoute('book.detail', this.model.book.id);
    }
    catch(e) {
      this.send('error', e)
    }
  }
}
