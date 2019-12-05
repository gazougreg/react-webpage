import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import Sections from '../components/Sections/Sections';


class App extends Component {
  constructor(props){
    super(props);
  
    this.state={
      loaded:false,
      sectionFlag:false,
      phoneNum:null,
      email:null,
      psw:null,
      errors:[],
      hasError: false
  }
  }
//it fetches the info from the API endpoints one after another
  componentDidMount(){
    fetch("https://voda-react-assessment.herokuapp.com/menu")
    .then(res=>res.json())
    .then((menuData)=> {
      fetch("https://voda-react-assessment.herokuapp.com/slider")
      .then(res=>res.json())
      .then((sliderData)=> {
        fetch("https://voda-react-assessment.herokuapp.com/home")
        .then(res=>res.json())
        .then((homeData)=> {
          fetch("https://voda-react-assessment.herokuapp.com/page")
          .then(res=>res.json())
          .then((pageData)=> { //finally the info is stored in state
            this.setState({menu: menuData, slider: sliderData, home: homeData, page: pageData, loaded: true})
          })
        })
      })
    })
    .catch(console.log)
  }
  
  //onClick to choose which section to display
  chooseSec1 = () => {
    this.setState({ sectionFlag: false});
  } 
  chooseSec2 = () => {
    this.setState({ sectionFlag: true});
  }

  //onChange it stores the input in state
  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value, hasError:false, errors:[]});//it also resets the errors
  }

// is called onSubmit to validate the input
  validateFormInput = (event) => {
    event.preventDefault();
    const errors = [];
    const regLow = /[a-z]/;
    const regUp = /[A-Z]/;
    const regNum = /[0-9]/;
    const regSym = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/; 

    // phone Number validation
    let tempPh = this.state.phoneNum;
    tempPh = tempPh.toString();
    for(let i=0; i < tempPh.length; i++){
      let p = tempPh.charAt(i);
      if(!(regNum.test(p) || (i==0 && p == '+'))){
        errors.push('Phone number should include only digits.');
        break;
      }
    }
    if (tempPh.length==13){
      if(!(tempPh.charAt(0)=='+' && (tempPh.charAt(3)==2 || tempPh.charAt(3)==6))){
        errors.push('Invalid phone number.');
      } 
    } else if(tempPh.length==10){
        if(!(tempPh.charAt(0)==2 || tempPh.charAt(0)==6)){
          errors.push('Invalid phone number.');
        }
    }
    else{
      errors.push('The phone number should have 10 digits.');
    }
    
    //email validation
    const tempEmail = this.state.email;
    
    if (tempEmail.length < 5) {
      errors.push("Email should be at least 5 characters long.");
    }
    if (tempEmail.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @.");
    }
    if (tempEmail.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot.");
    }

    //password validation
    const tempPsw = this.state.psw;
    let symCounter = 0;
    let numCounter = 0;
    let upperCounter = 0;
    let lowerCounter = 0;
    
    if (tempPsw.length < 8) {
      errors.push("Password should be at least 8 characters long.")
    }
    else {
      for ( let i=0; i < tempPsw.length; i++){
        let c=tempPsw.charAt(i);
       if(regSym.test(c)){
         symCounter++;
       } else if (regNum.test(c)){
         numCounter++;
       } else if (regLow.test(c)){
         lowerCounter++;
       } else if (regUp.test(c)){
         upperCounter++;
       } 
     }
    }
    if (symCounter == 0){
        errors.push("The password should include at least one symbol.");
    } 
    if (numCounter == 0){
        errors.push("The password should include at least one number.");
    } 
    if (lowerCounter == 0){
        errors.push("The password should include at least one lower case letter.");
    } 
    if (upperCounter == 0){
      errors.push("The password should include at least one capital letter.");
    }
    if (errors.length > 0) {
      this.setState({hasError:true, errors: errors});
    }
    else {
      console.log("I have found NO errors. Hooray!");
      this.setState({hasError:false});
    }
    return errors;
  }


  render(){
    if(this.state.loaded){
      return(
        <div>
          <div className="hero-box">
            <Header
              navMenu={this.state.menu}
              slides={this.state.slider}
            />
          </div>
          <div className="sections">
            <Sections
              homePage={this.state.home}
              section2={this.state.sectionFlag}
              chooseSec1={this.chooseSec1}
              chooseSec2={this.chooseSec2}
              storeInput={this.changeHandler}
              validation={this.validateFormInput}
              errors={this.state.errors}
              errorFlag={this.state.hasError}
            />
          </div>
        </div>
      );
    }else{
      return (
        <h4>Loading...</h4>
      );
    }
  }
}

export default App;
