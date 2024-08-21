import React from 'react';
import { render, screen } from '@testing-library/react';
import DonationCards from './DonationCards';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';


describe('Donation Cards', () => {
    const renderDonationCards = () => {
        render(
            <Router>
                <DonationCards />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderDonationCards();

        const componentData = [
            { testId: 'container' },
            { testId: 'card-km-component' },
            { testId: 'card-school-component' },
            { testId: 'card-school-material-component' },
            { testId: 'card-more-help-component' },
        ];

        componentData.forEach(({ testId }) => {
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});


describe("DonationCards", () => {
    const renderDonationCards = () => {
        render(
            <Router>
                <DonationCards />
            </Router>
        );
    };

    it('should render all the expected components', () => {
        renderDonationCards();

        const button = screen.getByRole("button");

            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent("Contacta");
            expect(button).toHaveClass('bg-[#51C8FC] mt-12 md:px-20');
    });
});
