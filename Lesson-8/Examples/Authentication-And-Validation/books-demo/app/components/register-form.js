import Component from '@glimmer/component';
import { action } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';
import { tracked } from "@glimmer/tracking";
import { getOwner } from "@ember/application";
import { assign } from '@ember/polyfills';
import Object from "@ember/object";

const Validations = buildValidations({
  username: [
    validator('ds-error'),
    validator('presence', true),
  ],
  email: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('ds-error'),
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  passwordConfirmation: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // get message() {
      //   return '{description} ' + this.model.i18n.t('errors.blank');
      // },
    }),
    validator('confirmation', {
      on: 'password',
      // get message() {
      //   return '{description} ' + this.model.i18n.t('errors.passwordDontMatch');
      // },
      // get description() {
      //   return this.model.i18n.t('errors.passwordDescription');
      // }
    })
  ]
});

class Form extends Object.extend(Validations) {
  @tracked username = "";
  @tracked email = "";
  @tracked password = "";
  @tracked passwordConfirmation = "";

  get isInvalid() {
    return this.validations.isInvalid;
  }

  serialize() {
    return {
      username: this.username,
      email: this.email,
      password: this.password,
    }
  }
}

export default class RegisterFormComponent extends Component {
  constructor() {
    super(...arguments);
    this.form = Form.create(getOwner(this).ownerInjection());
  }

  @action
  async saveUser(e) {
    e.preventDefault();
    const { validations } = await this.form.validate();

    if (validations.isValid) {
      this.args.onSubmit(this.form.serialize());
    }
  }
}
