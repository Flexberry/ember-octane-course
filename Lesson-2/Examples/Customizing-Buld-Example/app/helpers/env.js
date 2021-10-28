import { get } from '@ember/object';
import { helper } from '@ember/component/helper';
import ENV from 'ember-bootstrap-example/config/environment';

export default helper(function env([propertyName]) {
  return get(ENV, propertyName);
});
