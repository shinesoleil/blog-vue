'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlById = getUrlById;
var articles = [{
  title: 'China P3',
  id: '1',
  url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md'
}, {
  title: 'English Community',
  id: '2',
  url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/english-community.md'
}, {
  title: 'third',
  id: '3',
  url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md'
}];

exports.default = articles;
function getUrlById(id) {
  return articles.find(function (item) {
    return item.id === id;
  }).url;
}
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map