import React from 'react';
import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';

const sectionSelect = (props) => {
    if (props.flag){
        return(
            <SecondSection 
                info={props.secondSectInfo}
                storeInput={props.storeInput}
                validate={props.validate}
                errors={props.errors}
                errorFlag={props.errorFlag}
            />
        );
    } else {
        return (
            <FirstSection 
            images={props.images}
        />
        );
    }
}

export default sectionSelect;
