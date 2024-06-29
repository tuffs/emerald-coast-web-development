import '@testing-library/jest-dom';
import { render, /*screen */ } from '@testing-library/react';
import { React, act } from 'react';
import App from '../App';

let page;

beforeEach(() => {
  act(() => {
    page = render(<App />);
  });
});

test('renders website title of Emerald Coast Web Development', () => {
  const site__title = document.querySelector('.site__title');
  expect(site__title).toBeInTheDocument();
  expect(site__title).toHaveTextContent(/Emerald Coast Web Development/);
});

test('renders the subtitle of "Custom Web Development Servies"', () => {
  const site__subtitle = document.querySelector('.site__subtitle');
  expect(site__subtitle).toBeInTheDocument();
  expect(site__subtitle).toHaveTextContent(/A WEB DESIGN AND DEVELOPMENT FIRM/);
});