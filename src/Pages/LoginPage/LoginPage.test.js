import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage';
import '@testing-library/jest-dom/extend-expect';

describe('Login Page', () => {
    const renderLoginPage = () => {
        render(
            <Router>
                <LoginPage />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderLoginPage();

        const componentData = [
            { testId: 'navbar-component' },
            { testId: 'login-form-component' }
        ];

        componentData.forEach(({ testId }) => {
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});