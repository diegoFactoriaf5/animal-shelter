import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsPage from './NewsPage';
import '@testing-library/jest-dom/extend-expect';

describe('News Page', () => {
    const renderNewsPage = () => {
        render(
            <Router>
                <NewsPage />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderNewsPage();

        const componentData = [
            { testId: 'header-component' },
            { testId: 'news-component' },
            { testId: 'button-back-to-top-component' }
        ];

        componentData.forEach(({ testId }) => {
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});