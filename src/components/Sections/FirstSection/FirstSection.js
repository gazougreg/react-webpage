import React from 'react';
import { MDBRow,MDBCol,MDBContainer } from 'mdbreact';

const firstSection = (props) => {
    return (
        <div className="firstSecImg">
            <MDBContainer className="imageContainer">
            <MDBRow>
                <MDBCol md="4" className="mb-4">
                   <img src={props.images[0].img} className="img-fluid" alt="img0" id="img0"/>
                 </MDBCol>
                <MDBCol md="4" className="mb-4">
                    <MDBRow>
                        <img src={props.images[1].img} className="img-fluid z-depth-1" alt="img1" id="img1"/>
                    </MDBRow>
                    <MDBRow>
                        <img src={props.images[2].img} className="img-fluid z-depth-1" alt="img2" id="img2"/>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="4" className="mb-4">
                    <MDBRow>
                        <img src={props.images[3].img} className="img-fluid z-depth-1" alt="img3" id="img3"/>
                    </MDBRow>
                    <MDBRow>
                        <img src={props.images[4].img} className="img-fluid z-depth-1" alt="img4" id="img4"/>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
         </MDBContainer>
        </div>
    ); 
}

export default firstSection;