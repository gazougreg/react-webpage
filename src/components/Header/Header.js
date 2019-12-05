import React from 'react';
import Navi from './Navi/Navi';
import Slider from './Slider/Slider';

const bigHeader = (props) => {
    
    return (
        <header>
            <Navi 
                navList={props.navMenu}
            />   
            <Slider 
                slideItems={props.slides}
            />    
        </header>
    );
}

export default bigHeader;