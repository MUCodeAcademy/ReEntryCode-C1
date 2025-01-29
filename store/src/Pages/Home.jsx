/*

- Slideshow display ()
- Different categories for products

*/

import { useEffect, useState } from 'react';
import '../CSS/Home.css';

function Home() {

    const slides = [
        { title: "Cool Landscape", img: "landscape.jpg" },
        { title: "Large Mountains", img: "mountains.jpg" },
        { title: "LIGHTS", img: "lights.jpg" }
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const [prevSlide, setPrevSlide] = useState();
    const [arrowStop, setArrowStop] = useState(false);

    let interval;

    useEffect(() => {
        if (arrowStop) {
            clearInterval(interval);
            return;
        }
        interval = setInterval(() => {
            setSlideIndex((prev) => {
                setPrevSlide(prev);
                return (prev + 1) % slides.length; // the % slides.length wraps it back around to the beginning when it's at the end
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [arrowStop]);
    
    function plusSlides(n) {
        setPrevSlide(slideIndex);
        const newIndex = (slideIndex + n + slides.length) % slides.length;
        setSlideIndex(newIndex);
    }
    // from https://www.w3schools.com/howto/howto_js_slideshow.asp
    return (
        <div className='main'>
            <div className='slideshow-container'>
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className={`slide ${index === slideIndex ? 'active' : index === prevSlide ? 'previous' : ''}`}
                    >
                        <h3 className='text'>{item.title}</h3>
                        <img src={item.img} alt={item.title} />
                    </div>
                ))}
                <a className='arrow prev' onClick={() => { plusSlides(-1); setArrowStop(true) }}>&#10094;</a>
                <a className='arrow next' onClick={() => { plusSlides(1); setArrowStop(true) }}>&#10095;</a>
            </div>
        </div>
    )
}

export default Home;