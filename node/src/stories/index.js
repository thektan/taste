import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MemoryRouter } from 'react-router';

import { Button, Welcome } from '@storybook/react/demo';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

import NavBar from '../js/components/NavBar';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

const mockCurrentUser = {
  id: '0',
  name: 'Test Name'
};

storiesOf('NavBar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Signed out', () => <NavBar />)
  .add('Signed in', () => <NavBar currentUser={mockCurrentUser} />);
