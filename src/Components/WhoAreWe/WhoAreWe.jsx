import React from 'react'
import Title from '../TextComponents/Title/Title'
import Subtitle from '../TextComponents/Subtitle/Subtitle'
import Text from '../TextComponents/Text/Text'
import './WhoAreWe.css'
import StainTitle from '../TextComponents/StainTitle/StainTitle'



export default function WhoAreWe() { 
    const description = <React.Fragment><br/>Somos una organización sin fines de lucro dedicada a la protección 
    y el bienestar de los animales. Nuestro objetivo es rescatar, rehabilitar y encontrar hogares amorosos
     para animales abandonados, maltratados o en situaciones de vulnerabilidad. Creemos firmemente que cada vida importa,
     y trabajamos incansablemente para asegurar que todos los animales tengan la oportunidad de vivir con dignidad y amor.<br/>
    
</React.Fragment>
    return (
        <div id= "WhoAreWe" className=" h-auto md:h-[100vh] flex justify-center items-center flex-row flex-wrap gap-14 py-4">
            <div id="textWho" className="text-justify md:flex-row md:justify-start md:items-start flex-col justify-center items-center" >
                <Subtitle subtitle="Amigxs de cuatro patas" />
                <Title title="Quiénes somos" />
                <StainTitle />
                <Text text={description} />
            </div>
        </div>
    )
}
