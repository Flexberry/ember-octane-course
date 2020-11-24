import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ReviewFormComponent extends Component {
  @service moment;
  @service currentUser;

  @tracked user = this.currentUser.user.username;
  @tracked body = this.args.review.body;

  @action
  async saveReview(e) {
    e.preventDefault();

    this.args.onSubmit({
      user: this.user,
      body: this.body,
      createdAt: this.moment.moment(new Date()).format('YYYY-MM-DD'),
      book: this.args.review.book
    });
  }
}
