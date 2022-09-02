import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../Pages/Home';

it('Test Home component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
