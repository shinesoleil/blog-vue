'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlById = getUrlById;
var articles = [{
  title: 'China P3',
  id: '1',
  date: '2017-12-05',
  url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md'
}, {
  title: 'English Community',
  id: '2',
  date: '2018-01-01',
  url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/english-community.md'
}, {
  title: 'Placeholder',
  id: '3',
  date: '2018-02-01',
  url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md'
}];

exports.default = articles;
function getUrlById(id) {
  return articles.find(function (item) {
    return item.id === id;
  }).url;
}
//# sourceMappingURL=articles.js.map