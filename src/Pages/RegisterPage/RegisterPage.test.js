import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import '@testing-library/jest-dom/extend-expect';

describe('Register Page', () => {
    const renderLoginPage = () => {
        render(
            <Router>
                <RegisterPage />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderLoginPage();

        const componentData = [
            { testId: 'navbar-component' },
            { testId: 'register-form-component' }
        ];

        componentData.forEach(({ testId }) => {
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});