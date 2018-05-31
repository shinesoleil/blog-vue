'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = getArticles;
exports.getUrlById = getUrlById;
var articles = [{
  title: 'China P3',
  id: '1',
  date: '2017-12-05',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/p3.md'
}, {
  title: 'English Community',
  id: '2',
  date: '2018-01-01',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/english-community.md'

}, {
  title: 'React Best Practice Tools',
  id: '3',
  date: '2018-03-04',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/front-end-best-practice.md'
}, {
  title: 'More Articles',
  id: '4',
  date: '2018-02-27',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/more.md'
}];

function getArticles() {
  return articles;
}

function getUrlById(id) {
  return articles.find(function (item) {
    return item.id === id;
  }).url;
}
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map
//# sourceMappingURL=articles.js.map