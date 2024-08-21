import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminPage from './AdminPage';
import '@testing-library/jest-dom/extend-expect';

describe('Admins Page', () => {
    const renderAdminsPage = () => {
        render(
            <Router>
                <AdminPage />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderAdminsPage();

        const componentData = [
            { testId: 'navbar-component' },
            { testId: 'news-form-component' }
        ];

        componentData.forEach(({ testId }) => {
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});