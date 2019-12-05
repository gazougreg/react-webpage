import React from 'react';
import { MDBRow,MDBCol,MDBContainer } from 'mdbreact';

const formSect = (props) => {
    return (
        <div className="formSec">
        
            <h4>{props.formHeader}</h4>
            <form onSubmit={props.valInput}>
                {props.errors.map((error)=> {
                    if((props.errorFlag)) {
                        return (
                            <p className="error">{error}</p>
                        );
                        } else {
                            return null;
                        }    
                    })
                }
                <MDBRow>
                    <input type="tel" name="phoneNum" placeholder={props.formLabels[0]} onChange={props.storeInput} required/>
                </MDBRow>
                <MDBRow>
                    <input type="email" name="email" placeholder={props.formLabels[1]} onChange={props.storeInput} required/>
                </MDBRow>
                <MDBRow>
                    <input type="password" name="psw" placeholder={props.formLabels[2]} onChange={props.storeInput} required/>
                </MDBRow>
                <MDBRow>
                    <input type="submit" value={props.buttonText} className="btn-submit"/>
                </MDBRow>
            </form>        
        </div>
        
    );
}


export default formSect;