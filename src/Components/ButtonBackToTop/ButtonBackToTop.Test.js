import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import ButtonBackToTop from './ButtonBackToTop';
import '@testing-library/jest-dom/extend-expect';

test('renders ButtonBackToTop component', () => {
  render(<ButtonBackToTop />);
  expect(screen.getByTitle('Ir a inicio')).toBeInTheDocument();
});

test('scrolls to top when button is clicked', () => {
  const scrollToTopMock = jest.fn();
  render(<ButtonBackToTop />);
  fireEvent.click(screen.getByTitle('Ir a inicio'));
  expect(scrollToTopMock).toHaveBeenCalled();
});
