'use strict';

var _vue = require('@storybook/vue');

// automatically import all files ending in *.stories.js
var req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(function (filename) {
    return req(filename);
  });
}

(0, _vue.configure)(loadStories, module);
//# sourceMappingURL=config.js.map