import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentUserService extends Service {
  @service store;
  @tracked user;

  async load() {
    let user = await this.store.queryRecord('user', { me: true });
    this.user = user;
  }
}
