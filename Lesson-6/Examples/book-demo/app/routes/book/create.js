import Route from "@ember/routing/route";

export default class BookCreateRoute extends Route {
  model() {
    return {
      title: "",
      isbn: "",
      publishDate: null,
      author: null,
      reviews: null,
    };
  }
}
