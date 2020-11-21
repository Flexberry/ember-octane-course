import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { next } from '@ember/runloop';

export default class InputTagsComponent extends Component {
  @tracked _tags = this.args.tags;

  tagsPrevValue;

  get tags() {
    if (this.tagsPrevValue !== this.args.tags) {
      this.tagsPrevValue = this.args.tags;
      next(this, () => {
        this._tags = [...this.args.tags];
      });
    }

    return this._tags;
  }

  @action
  tagAdded(newTag) {
    this._tags.push(newTag);
    this.args.onChange(this._tags);
  }

  @action
  tagRemoved(tag) {
    const tagIndex = this._tags.indexOf(tag);
    if (tagIndex > -1) {
      const part1 = this._tags.slice(0, tagIndex);
      const part2 = this._tags.slice(tagIndex + 1);
      this._tags = [...part1, ...part2];
      this.args.onChange(this._tags);
    }
  }
}
