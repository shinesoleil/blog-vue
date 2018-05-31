'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HelloWorld = require('@/components/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _BlogList = require('@/components/blog/BlogList');

var _BlogList2 = _interopRequireDefault(_BlogList);

var _Blog = require('@/components/blog/Blog');

var _Blog2 = _interopRequireDefault(_Blog);

var _MyTable = require('@/components/MyTable');

var _MyTable2 = _interopRequireDefault(_MyTable);

var _User = require('@/components/user/User');

var _User2 = _interopRequireDefault(_User);

var _UserHome = require('@/components/user/UserHome');

var _UserHome2 = _interopRequireDefault(_UserHome);

var _UserProfile = require('@/components/user/UserProfile');

var _UserProfile2 = _interopRequireDefault(_UserProfile);

var _UserSettings = require('@/components/user/UserSettings');

var _UserSettings2 = _interopRequireDefault(_UserSettings);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable import/extensions */
_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'homepage',
    component: _HelloWorld2.default
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
    path: '/lifecycles/created',
    name: 'table-test',
    component: _MyTable2.default
  }, {
    // https://github.com/pillarjs/path-to-regexp#parameters
    path: '/user/:id(\\d+)',
    component: _User2.default,
    props: true,
    children: [{
      path: '',
      name: 'user-home',
      component: _UserHome2.default
    }, {
      path: 'profile',
      name: 'user-profie',
      component: _UserProfile2.default
    }, {
      path: 'settings',
      name: 'user-settings',
      component: _UserSettings2.default
    }, {
      path: 'all',
      name: 'user-all',
      // components with an 's'
      components: {
        default: _UserHome2.default,
        profile: _UserProfile2.default,
        settings: _UserSettings2.default
      }
    }]
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
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map