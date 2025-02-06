import React from 'react';
import './Events.css';

const eventsData = [
    {
        id: 1,
        titulo: 'Concierto de Pop',
        fecha: '20/06/2022',
        lugar: 'Teatro de la Granja',
        img: 'https://balcarce.gob.ar/wp-content/uploads/2024/07/1-66.webp'
    },
    {
        id: 2,
        titulo: 'Charla de Arte',
        fecha: '25/06/2022',
        lugar: 'Salón de Artes',
        img: 'https://balcarce.gob.ar/wp-content/uploads/2024/07/1-66.webp'
    },
    {
        id: 3,
        titulo: 'Feria de Nuevos Productos',
        fecha: '30/06/2022',
        lugar: 'Ferretería Balcarce',
        img: 'https://balcarce.gob.ar/wp-content/uploads/2024/07/1-66.webp'
    }
];

// Componente de tarjeta individual
const EventCard = ({ titulo, fecha, lugar, img }) => (
    <div className="card">
        <img src={img} alt={`Imagen de ${titulo}`} />
        <h2>{titulo}</h2>
        <p><strong>Fecha:</strong> {fecha}</p>
        <p><strong>Lugar:</strong> {lugar}</p>
    </div>
);

const Events = () => {
    return (
        <div className="cards-container">
            <h1 className="h1-principal">Próximos Eventos</h1>
            <div className="cards-grid">
                {eventsData.map(event => (
                    <EventCard 
                        key={event.id}
                        titulo={event.titulo}
                        fecha={event.fecha}
                        lugar={event.lugar}
                        img={event.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default Events;