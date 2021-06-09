import React from 'react';
import Carousel from 'react-material-ui-carousel';
// import {SliderImages} from '.../src/assets/SliderImages';
import './SliderItems.css'

const SliderImages=[
    'https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50',
    
]
const SliderItems=()=>{
    return(
        <div className="slider__conntainer">
        <Carousel
            // indicators={false}
            navButtonsAlwaysVisible={true}
           >
        {
            SliderImages.map(image=>(
                <img style={{height:'280px',width:'100%'}} src={image}/>
            ))
        }
    </Carousel>
    </div>
    )
}
export default SliderItems;