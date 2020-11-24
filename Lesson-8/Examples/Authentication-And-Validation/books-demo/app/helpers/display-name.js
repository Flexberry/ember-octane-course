import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export default helper(function displayName(params/*, hash*/) {
  let [name, surname] = params;
  return htmlSafe(`<strong>${surname}</strong>, ${name}`);
});
