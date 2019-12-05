import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const slider = (props) => {
    return (
        <Carousel>
            {props.slideItems.map(( slide) => (
                <Carousel.Item className="carousel">
                    <img 
                        className="d-block w-100" 
                        src={slide.image} 
                        alt={slide.title}
                    />
                    <Carousel.Caption className="carouselText">
                        <h2>{slide.title}</h2>
                        <p>{slide.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))
            }         
        </Carousel>
    );
}; 
       
    


export default slider;

{/* <Slides 
                slideItems={props.slideItems}
            />

             <Carousel.Item>
                <img
                    className="d-block w-100" 
                    src={props.slideItems[0].image} 
                    alt="slide 1"
                />
                <Carousel.Caption>
                    <h3>Slide 1</h3>
                    <p>Text for Slide 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100" 
                    src="https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                    alt="slide 2"
                />
                <Carousel.Caption>
                    <h3>Slide 2</h3>
                    <p>Text for Slide 2</p>
                </Carousel.Caption>
            </Carousel.Item>  */}