import React, { useState, useEffect } from 'react';
import NewsCards from '../NewsCards/NewsCards.jsx';
import HTTPService from '../../../Services/HTTPService.jsx';
import Title from '../../TextComponents/Title/Title.jsx';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import StainTitle from '../../TextComponents/StainTitle/StainTitle.jsx';


function NewsSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await HTTPService().getAllData();
        setCards(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNews();
  }, []);

  return (


    <div  id="LastNews" className="md:h-[100vh] flex justify-center items-center flex-col mt-12">
      <Title  title="Últimas Noticias" />
      <StainTitle />
      <div className="flex justify-center flex-wrap gap-12">
        {cards.slice(-3).reverse().map((card) => (
          <NewsCards key={card.id} card={card} />
        ))}
      </div>
      <Link to="/news">
        <Button size="lg" title="Consulta más noticias" className="bg-[#51C8FC] mt-12 md:px-20">Ver más</Button>
      </Link>
    </div>
  );
}


export default NewsSection;