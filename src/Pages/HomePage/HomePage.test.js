import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import '@testing-library/jest-dom/extend-expect';

describe('HomePage', () => {
    const renderHomePage = () => {
        render(
            <Router>
                <HomePage />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderHomePage();

        const componentData = [
            { testId: 'background-img' },
            { testId: 'header-component' },
            { testId: 'donation-cards-component' },
            { testId: 'who-are-we-component' },
            { testId: 'news-section-component' },
            { testId: 'our-trip-component' },
            { testId: 'bus-animation-component' },
            { testId: 'button-back-to-top-component' },
        ];

        componentData.forEach(({ testId }) => {
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});

