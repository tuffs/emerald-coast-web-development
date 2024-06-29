import '@testing-library/jest-dom';
import { render, /*screen */ } from '@testing-library/react';
import { act } from 'react';
import Header from '../components/Header';

let page;

beforeEach(() => {
  act(() => {
    page = render(<Header />);
  });
});

test('renders navbar for website', () => {
  const navigation_bar__element = document.querySelector('.navbar');
  expect(navigation_bar__element).toBeInTheDocument();
  expect(navigation_bar__element).toHaveTextContent(/EMERALD COAST WEB DEVELOPMENT/);
});

test('renders a link with the text OUR PROCESS', () => {
  const our_process__navigation_link = document.querySelector('.our_process__link');
  expect(our_process__navigation_link).toBeInTheDocument();
  expect(our_process__navigation_link).toHaveTextContent(/OUR PROCESS/);
});

test('renders a link with the text SERVICES', () => {
  const services__navigation_link = document.querySelector('.services__link');
  expect(services__navigation_link).toBeInTheDocument();
  expect(services__navigation_link).toHaveTextContent(/SERVICES/);
});

test('renders a link with the text FEATURED WORK', () => {
  const featured_work__navigation_link = document.querySelector('.featured_work__link');
  expect(featured_work__navigation_link).toBeInTheDocument();
  expect(featured_work__navigation_link).toHaveTextContent(/FEATURED WORK/);
});

test('renders a link with the text TECHNOLOGIES', () => {
  const technologies__navigation_link = document.querySelector('.technologies__link');
  expect(technologies__navigation_link).toBeInTheDocument();
  expect(technologies__navigation_link).toHaveTextContent(/TECHNOLOGIES/);
});

test('renders a link with the text BLOG', () => {
  const blog__navigation_link = document.querySelector('.blog__link');
  expect(blog__navigation_link).toBeInTheDocument();
  expect(blog__navigation_link).toHaveTextContent(/BLOG/);
});

test('renders a link with the text CONTACT US', () => { 
  const contact_us__navigation_link = document.querySelector('.contact_us__link');
  expect(contact_us__navigation_link).toBeInTheDocument();
  expect(contact_us__navigation_link).toHaveTextContent(/CONTACT US/);
});