import React, { useEffect, useState } from 'react'
import CarruManual from './CarruManual';
import './Carousel.css';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://i.pinimg.com/736x/e3/c1/27/e3c1274448a7d6c5ad8fa74ec50dfe6f.jpg",
        "https://cdn.pixabay.com/photo/2019/10/29/09/20/summer-4586497_1280.jpg"
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambio cada 5 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div className='carrusel'>
            <a href="#" className='link-img'>
                <img src={images[currentIndex]} alt="Img futura" />
            </a>

            <CarruManual
                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
            />

        </div>
    )
}

export default Carousel