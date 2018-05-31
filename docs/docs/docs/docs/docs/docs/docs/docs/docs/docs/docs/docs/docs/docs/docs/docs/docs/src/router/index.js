'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _BlogList = require('../components/blog/BlogList.vue');

var _BlogList2 = _interopRequireDefault(_BlogList);

var _Blog = require('../components/blog/Blog.vue');

var _Blog2 = _interopRequireDefault(_Blog);

var _Lab = require('../components/laboratory/Lab.vue');

var _Lab2 = _interopRequireDefault(_Lab);

var _LabHome = require('../components/laboratory/LabHome.vue');

var _LabHome2 = _interopRequireDefault(_LabHome);

var _LabTable = require('../components/laboratory/LabTable.vue');

var _LabTable2 = _interopRequireDefault(_LabTable);

var _Contact = require('../components/contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable import/extensions */
_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    redirect: '/blogs'
  }, {
    path: '/blogs',
    name: 'blogs',
    component: _BlogList2.default
  }, {
    path: '/blogs/:id',
    name: 'blog',
    component: _Blog2.default,
    props: true
  }, {
    // https://github.com/pillarjs/path-to-regexp#parameters
    path: '/lab',
    component: _Lab2.default,
    props: true,
    children: [{
      path: '',
      name: 'lab',
      component: _LabHome2.default
    }, {
      path: 'table',
      name: 'table',
      component: _LabTable2.default
    }]
  }, {
    path: '/contact',
    name: 'contact',
    component: _Contact2.default
  }]
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map