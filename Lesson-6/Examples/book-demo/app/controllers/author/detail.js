import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class AuthorDetailController extends Controller {
  @action
  async deleteAuthor() {
    try {
      const books = await this.model.books;
      const bookArray = books.toArray();
      await this.model.destroyRecord();

      bookArray.forEach((book) => {
        book.unloadRecord();
      });

      this.transitionToRoute("author.index");
    } catch (e) {
      this.send("error", e);
    }
  }
}
