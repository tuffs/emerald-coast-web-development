import '@testing-library/jest-dom';
import { render, /*screen */ } from '@testing-library/react';
import Header from '../components/Header';

let page;

beforeEach(() => {
  page = render(<Header />);
});

test('renders navbar for website', () => {
  const navigation_bar__element = document.querySelector('.navbar');
  expect(navigation_bar__element).toBeInTheDocument();
  expect(navigation_bar__element).toHaveTextContent(/EMERALD COAST WEB DEVELOPMENT/);
});

test('renders navigation links inside the navbar', () => {
  const home__navigation_link = document.querySelector('.home__link');
  expect(home__navigation_link).toBeInTheDocument();
  expect(home__navigation_link).toHaveTextContent(/HOME/);
});