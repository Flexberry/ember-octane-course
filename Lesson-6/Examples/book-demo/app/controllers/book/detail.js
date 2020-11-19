import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class BookDetailController extends Controller {
  @action
  async deleteBook() {
    try {
      let reviews = await this.model.reviews;
      const reviewsArray = reviews.toArray();

      await this.model.destroyRecord();

      reviewsArray.forEach((review) => {
        review.unloadRecord();
      });

      this.transitionToRoute("book.index");
    } catch (e) {
      this.send("error", e);
    }
  }
}
