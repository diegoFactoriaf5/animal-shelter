import 'tailwindcss/tailwind.css';


export default function NewPrototype({ card }) {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    const month = months[new Date(card.date).getMonth()];
    const day = new Date(card.date).getDate();
    const year = new Date(card.date).getFullYear();

    return (

        <div >
            <img  src={card.urlImg} alt="" />
            <p className="text-xs my-4 text-gray-700">{day} de {month} de {year}</p>
            <h4 className="text-2xl font-bold my-4 h-10 text-[#51C8FC] ">{card.title}</h4>
            <p className="text-lg text-gray-700 text-justify"> {card.description} </p>
        </div>
    );
}