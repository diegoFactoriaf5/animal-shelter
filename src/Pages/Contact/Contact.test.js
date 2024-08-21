import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact';
import '@testing-library/jest-dom/extend-expect';

describe('Contact Page', () => {
    const renderContactPage = () => {
        render(
            <Router>
                <Contact />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderContactPage();

        const componentData = [
            { testId: 'header-component' },
            { testId: 'contact-social-component' }
        ];

        componentData.forEach(({ testId }) => {
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});

