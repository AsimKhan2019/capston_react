import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from '../page/Home';
import Details from '../page/Details';

it('Test Detail component with ID', () => {
  const tree = render(
    <main>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details/:28" element={<Details />} />
          </Routes>
        </Router>
      </Provider>
    </main>,
  );
  expect(tree).toMatchSnapshot();
});
