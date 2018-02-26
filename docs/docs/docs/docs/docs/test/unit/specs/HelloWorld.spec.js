'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _HelloWorld = require('@/components/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('HelloWorld.vue', function () {
  it('should render correct contents', function () {
    var Constructor = _vue2.default.extend(_HelloWorld2.default);
    var vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent).toEqual('Welcome to Your Vue.js App');
  });
});
//# sourceMappingURL=HelloWorld.spec.js.map
//# sourceMappingURL=HelloWorld.spec.js.map
//# sourceMappingURL=HelloWorld.spec.js.map
//# sourceMappingURL=HelloWorld.spec.js.map
//# sourceMappingURL=HelloWorld.spec.js.map