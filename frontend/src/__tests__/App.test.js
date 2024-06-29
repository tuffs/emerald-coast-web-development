import '@testing-library/jest-dom';
import { render, /*screen */ } from '@testing-library/react';
import { React, act } from 'react';
import HomepageHero from '../components/HomepageHero';

let page;

beforeEach(() => {
  act(() => {
    page = render(<HomepageHero />);
  });
});

test('renders website title of EMERALD COAST WEB DEVELOPMENT', () => {
  const site__title = document.querySelector('.site__title');
  expect(site__title).toBeInTheDocument();
  expect(site__title).toHaveTextContent(/EMERALD COAST WEB DEVELOPMENT/);
});

test('renders the subtitle of "WEB DESIGN & CUSTOM SOFTWARE"', () => {
  const site__subtitle = document.querySelector('.site__subtitle');
  expect(site__subtitle).toBeInTheDocument();
  expect(site__subtitle).toHaveTextContent(/WEB DESIGN & CUSTOM SOFTWARE/);
});