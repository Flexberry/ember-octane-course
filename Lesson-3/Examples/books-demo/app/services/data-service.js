import Service from '@ember/service';
// import ENV from 'books-demo/config/environment';

import { getOwner } from '@ember/application';

export default class DataServiceService extends Service {
  async readAuthors() {
    let url = getOwner(this).application;
    let response = await fetch(`${url.backEndURL}/authors`);
    return response.json();
  }

  async readAuthor(id) {
    let url = getOwner(this).application;
    let response = await fetch(`${url.backEndURL}/authors/${id}`);
    return response.json();
  }
}
