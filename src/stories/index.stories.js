/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import Todo from '../components/Todo.vue';
import UserMenu from '../components/user-menu/UserMenu.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Todo', module)
  .add('with todo list data', () => ({
    components: { Todo },
    template: '<todo :todos="[1,2,3,4,5]"/>',
  }))
  .add('without data', () => ({
    components: { Todo },
    template: '<todo/>',
  }));

storiesOf('UserMenu', module)
  .add('basic', () => ({
    components: { UserMenu },
    template: '<user-menu></user-menu>'
  }));

/* eslint-enable react/react-in-jsx-scope */
