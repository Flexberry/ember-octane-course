import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service('data') dataService;
  @service router;

  @tracked tags;
  @tracked isUploadingFile;

  uploadData = null;

  @action
  changeTags(newTags) {
    this.tags = [...newTags];
    console.log(this.tags);
  }

  @action
  change() {
    this.tags = ['1', '2', '3'];
  }

  @action
  async saveBook(e) {
    e.preventDefault();

    this.isUploadingFile = true;
    const uploadData = this.uploadData;
    await this.dataService.createBook({
      name: this.bookName,
      fio: this.authorFIO,
      pagesCount: this.pagesCount,
      url: this.bookDescriptionURL,
      tags: this.tags,
      coverURL: ''
    }, uploadData);

    this.isUploadingFile = false;
    this.router.transitionTo('saved');
  }

  @action
  changeUploadData(uploadData) {
    this.uploadData = uploadData;
  }

  reset() {
    this.isUploadingFile = false;
    this.bookName = '';
    this.authorFIO = '';
    this.pagesCount = '';
    this.bookDescriptionURL = '';
    this.tags = ['first', 'второй'];
    this.uploadData = null;
  }
}
