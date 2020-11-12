import Service from '@ember/service';
import config from 'books-demo/config/environment';

export default class DataServiceService extends Service {
  async readAuthors(searchValue) {
    let searchSegm = searchValue ? `?q=${searchValue}` : '';
    let response = await fetch(`${config.APP.backEndURL}/authors${searchSegm}`);
    return response.json();
  }

  async readAuthor(id) {
    let response = await fetch(`${config.APP.backEndURL}/authors/${id}`);
    return response.json();
  }

  changeAuthor(author) {
    return fetch(`${config.APP.backEndURL}/authors/${author.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(author)
    });
  }

  createAuthor(author) {
    return fetch(`${config.APP.backEndURL}/authors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(author)
    });
  }

  deleteAuthor(id) {
    return fetch(`${config.APP.backEndURL}/authors/${id}`, {
      method: 'DELETE',
    });
  }

}
