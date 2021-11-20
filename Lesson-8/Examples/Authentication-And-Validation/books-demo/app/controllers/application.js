import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import config from 'books-demo/config/environment';

export default class ApplicationController extends Controller {
  constructor () {
    super(...arguments);
    this.currentLocale = config.i18n.defaultLocale;
    this.i18n.locale = this.currentLocale;
  }

  @service session;
  @service currentUser;
  @service i18n;

  get isRussian() {
    return this.currentLocale === 'ru';
  }

  get isEnglish() {
    return this.currentLocale === 'en';
  }

  @action
  async logout(e) {
    e.preventDefault();

    this.session.invalidate();
  }
}
