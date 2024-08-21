import './DonationCards.css';
import Subtitle from '../../TextComponents/Subtitle/Subtitle';
import Title from '../../TextComponents/Title/Title';
import CardMoreHelp from './CardMoreHelp';
import CardDonation from './CardDonation';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import StainTitle from '../../TextComponents/StainTitle/StainTitle';


export default function DonationCards() {

    return (
        <div id="Collaborate" className="md:h-[100vh] flex justify-center items-center flex-col pb-10 mt-12">
            <div className="flex justify-center items-center flex-col" >
                <Subtitle subtitle="Nuestra causa" />
                <Title title="Colabora con nosotros" />
                <StainTitle />
            </div>
            <div data-testid="container" className="flex justify-center flex-wrap mt-1.5 gap-14" >
                <div data-testid="card-km-component">
                    <CardDonation />
                </div>
                <div data-testid="card-more-help-component">
                    <CardMoreHelp />
                </div>
            </div>
            <Link to="/contact">
                <Button title="Contacta con nosotros" size="lg" className='bg-[#51C8FC] mt-12 md:px-20'>Contacta</Button>
            </Link>
        </div>
    )
}