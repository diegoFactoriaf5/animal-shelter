import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';
import '@testing-library/jest-dom/extend-expect';

test('renders title correctly', () => {
  render(<Title title="Test Title" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
});