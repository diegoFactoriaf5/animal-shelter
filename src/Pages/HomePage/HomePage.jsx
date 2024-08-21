import React from 'react'
import './HomePage.css'
import DonationCards from '../../Components/DonationComponents/DonationCards/DonationCards'
import WhoAreWe from '../../Components/WhoAreWe/WhoAreWe'
import Header from '../../Components/HeaderComponents/Header/Header'
import NewsSection from '../../Components/NewsComponents/NewsSection/NewsSection'
import ButtonBackToTop from '../../Components/ButtonBackToTop/ButtonBackToTop'


export default function HomePage() {
  return (
    <>
      <div data-testid="header-component">
        <Header />
      </div>
      <div data-testid="donation-cards-component">
        <DonationCards />
      </div>
      <div data-testid="who-are-we-component">
        <WhoAreWe />
      </div>
      <div data-testid="news-section-component">
        <NewsSection />
      </div>
      <div data-testid="button-back-to-top-component">
        <ButtonBackToTop />
      </div>
    </>
  )
}
