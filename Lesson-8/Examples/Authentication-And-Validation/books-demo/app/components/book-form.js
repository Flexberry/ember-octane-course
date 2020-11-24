import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BookFormComponent extends Component {
  @service store;

  @tracked title = this.args.book.title;
  @tracked isbn = this.args.book.isbn;
  @tracked publishDate = this.args.book.publishDate;
  @tracked author = this.args.book.author;

  @action
  async saveBook(e) {
    e.preventDefault();
    this.args.onSubmit({
      title: this.title,
      isbn: this.isbn,
      publishDate: this.publishDate,
      author: this.author
    });
  }

  @action
  searchAuthor(query) {
    return this.store.query('author', { q: query })
  }
}
