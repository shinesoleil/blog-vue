'use strict';

var _vue = require('@storybook/vue');

var _addonActions = require('@storybook/addon-actions');

var _addonLinks = require('@storybook/addon-links');

var _MyButton = require('./MyButton.vue');

var _MyButton2 = _interopRequireDefault(_MyButton);

var _Welcome = require('./Welcome.vue');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Todo = require('../components/Todo.vue');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable react/react-in-jsx-scope */

(0, _vue.storiesOf)('Welcome', module).add('to Storybook', function () {
  return {
    components: { Welcome: _Welcome2.default },
    template: '<welcome :showApp="action" />',
    methods: { action: (0, _addonLinks.linkTo)('Button') }
  };
});
// eslint-disable-next-line import/extensions


(0, _vue.storiesOf)('Button', module).add('with text', function () {
  return {
    components: { MyButton: _MyButton2.default },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: (0, _addonActions.action)('clicked') }
  };
}).add('with some emoji', function () {
  return {
    components: { MyButton: _MyButton2.default },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: (0, _addonActions.action)('clicked') }
  };
});

(0, _vue.storiesOf)('Todo', module).add('with todo list data', function () {
  return {
    components: { Todo: _Todo2.default },
    template: '<todo :todos="[1,2,3,4,5]"/>'
  };
}).add('without data', function () {
  return {
    components: { Todo: _Todo2.default },
    template: '<todo/>'
  };
});

/* eslint-enable react/react-in-jsx-scope */
//# sourceMappingURL=index.stories.js.map
//# sourceMappingURL=index.stories.js.map
//# sourceMappingURL=index.stories.js.map
//# sourceMappingURL=index.stories.js.map
//# sourceMappingURL=index.stories.js.map