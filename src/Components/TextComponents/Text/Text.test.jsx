import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import '@testing-library/jest-dom/extend-expect';

test('renders text', () => {
  render(<Text text="Test Text" />);
  expect(screen.getByText('Test Text')).toBeInTheDocument();
});