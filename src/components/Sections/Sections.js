import React from 'react';
import SectionSelect from './SectionSelect';

const sections = (props) => {
    return (
        <div className="sections">
            <div>
                <h3 className="sectionBigHead">{props.homePage[0].description}</h3>
                <ul className="sectionSelection">
                    <li><a href="#" onClick={()=>props.chooseSec1()}>Section 1</a></li>
                    <li><a href="#" onClick={()=>props.chooseSec2()}>Section 2</a></li>
                </ul>
            </div>
           <SectionSelect
            flag={props.section2}
            images={props.homePage[0].sections[0].images}
            secondSectInfo={props.homePage[0].sections[1]}
            storeInput={props.storeInput}
            validate={props.validation}
            errors={props.errors}
            errorFlag={props.errorFlag}
           />
        </div>
    );
}

export default sections;