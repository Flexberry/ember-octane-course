import { modifier } from 'ember-modifier';
import { typeOf } from '@ember/utils';
import { assert } from '@ember/debug';

export default modifier((element, [tags, addTagListener, removeTagListener]) =>{
  assert('Passed tags must be an array', typeOf(tags) === 'array');

  const arraysAreEqual = (arr1, arr2) => {
    arr2 = arr2.itemsArray ? arr2.itemsArray : arr2;
    return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
  }

  const el = $(element);

  const addTag = (e) => {
    addTagListener(e.item);
  };

  const removeTag = (e) => {
    removeTagListener(e.item);
  };

  const currentValues = el.tagsinput('items');

  if (!arraysAreEqual(tags, currentValues)) {
    el.tagsinput('removeAll');
    tags.forEach(tag => {
      el.tagsinput('add', tag);
    });
  }
  el.on('itemAdded', addTag);
  el.on('itemRemoved', removeTag);

  return () => {
    el.off('itemAdded', addTag);
    el.off('itemRemoved', removeTag);
  }
});
