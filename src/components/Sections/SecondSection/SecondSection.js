import React from 'react';
import PercentSect from './PercentSect/PercentSect';
import FormSect from './FormSect/FormSect';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const secondSection = (props) => {
    return(
        <div className="secondSec">
            <MDBContainer>
                <MDBRow md="12" ld="12">
                    <MDBCol md="6" ld="6">
                        <PercentSect 
                            percentInfo={props.info}
                        />
                    </MDBCol>
                    <MDBCol md="6" ld="6">
                        <FormSect 
                            formHeader={props.info.formText}
                            formLabels={props.info.formLabels}
                            buttonText={props.info.buttonText}
                            storeInput={props.storeInput}
                            valInput={props.validate}
                            errors={props.errors}
                            errorFlag={props.errorFlag}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>    
        </div>
    );
}

export default secondSection;