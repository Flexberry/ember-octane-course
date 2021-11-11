import Service from '@ember/service';
import config from 'bootstrap-component/config/environment';
// import { getOwner } from '@ember/application';

export default class DataService extends Service {
  async getBooks(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }

    const response = await fetch(`${config.backendURL}/books${queryParams}`);
    return await response.json();
  }

  async getBook(id) {
    const response = await fetch(`${config.backendURL}/books/${id}`);
    return await response.json();
  }

  deleteBook(book) {
    return fetch(`${config.backendURL}/books/${book.id}`, { method: 'DELETE' });
  }

  async createBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${config.backendURL}/books`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${config.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${config.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            console.log('Ok');
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  }
}
