import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewAuthorModalComponent extends Component {
  @service store;
  @tracked showModal;

  author = {
    firstName: '',
    lastName: ''
  };

  @action
  async save(e) {
    e.preventDefault();

    let newAuthor = this.store.createRecord('author', this.author);
    await newAuthor.save();

    this.showModal = false;
    this.args.onSave(newAuthor);
  }
}
