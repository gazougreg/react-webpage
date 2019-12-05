import React from 'react';

const percentSect = (props) => {
    return (
        <div className="statsSec">
            <h5>{props.percentInfo.title}</h5>
            <h3>{props.percentInfo.graphText}</h3>
            
            {props.percentInfo.stats.map((stat,index) => (
               <div> 
                   <h6>{stat.title}</h6>
                    <input type="range" min="0" max="100" name={stat.title} value={stat.amount/10}>
                    </input>
               </div>    
            ))
            }
        </div>
    );
}

export default percentSect;