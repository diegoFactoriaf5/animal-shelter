import React from 'react';
import { render } from '@testing-library/react';
import Subtitle from './Subtitle';
import '@testing-library/jest-dom/extend-expect';

describe('Subtitle component', () => {
  it('renders the subtitle correctly', () => {
    const subtitleText = 'Subtítulo de prueba';
    const { getByText } = render(<Subtitle subtitle={subtitleText} />);
    const subtitleElement = getByText(subtitleText);
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement.tagName).toBe('H1');
    expect(subtitleElement).toHaveStyle('font-size: 2em');
  });
});