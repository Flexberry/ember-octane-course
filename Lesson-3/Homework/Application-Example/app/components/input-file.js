import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import $ from 'jquery';

export default class InputFileComponent extends Component {
  @tracked uploadData = null;

  get isFileChoosen () {
    return this.uploadData && this.uploadData.files.length;
  }

  get ifRemoveButtonDisabled () {
    return !this.isFileChoosen;
  }

  get fileName () {
    return this.isFileChoosen ? this.uploadData.files[0].name : 'Выберите файл';
  }

  @action
  removeFile() {
    this.uploadData = null;
    this.args.uploadDataChanged(null);
  }

  initFileElement(element, [component]) {
    const onFileAdd = (e, uploadData) => {
      component.uploadData = uploadData;
      component.args.uploadDataChanged(uploadData);
    }

    if (!$(element).fileupload('instance')) {
      // Initialize jQuery fileupload plugin (https://github.com/blueimp/jQuery-File-Upload/wiki/API).
      $(element).fileupload({
        // Disable autoUpload.
        autoUpload: false,

        // Type of data that is expected back from the server.
        dataType: 'json',

        // Maximum number of files to be selected and uploaded.
        maxNumberOfFiles: 1,

        // Enable single file uploads.
        singleFileUploads: true,

        // Disable drag&drop file adding.
        dropZone: null,

        // File add handler.
        add: onFileAdd
      });
    }
  }

  destroyFileElement(element) {
    if ($(element).fileupload('instance')) {
      $(element).fileupload('destroy');
    }
  }
}
