import './App.css';
import React,{Component} from 'react';


class App extends Component{
  render(){
    return(
            <div className="Main">
              <div className="picture"></div>
      
              <div className="title">
                <div className="logo">movies</div>
                <div className="portal">Filmmaker Portal</div>
              </div>
              <div className="set">Set up your credit or debit card.</div>

              <div className="details">
          
              <div className="name1">First Name</div>
              <svg id="l1" width="411" height="1" viewBox="0 0 411 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-4.37114e-08" y1="0.5" x2="411" y2="0.499964" stroke="#BDBDBD"/>
              </svg>

              <div className="name2">Last Name</div>
              <svg id="l2" width="411" height="1" viewBox="0 0 411 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-4.37114e-08" y1="0.5" x2="411" y2="0.499964" stroke="#BDBDBD"/>
              </svg>

              <div className="name3">Card Number</div>
              <svg id="l3" width="411" height="1" viewBox="0 0 411 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-4.37114e-08" y1="0.5" x2="411" y2="0.499964" stroke="#BDBDBD"/>
              </svg>

              <div className="name4">Expiry Date (MM/YY)</div>
              <svg id="l4" width="411" height="1" viewBox="0 0 411 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-4.37114e-08" y1="0.5" x2="411" y2="0.499964" stroke="#BDBDBD"/>
              </svg>

              <div className="name5">Security Code (CVV)</div>
              <svg id="l5" width="411" height="1" viewBox="0 0 411 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-4.37114e-08" y1="0.5" x2="411" y2="0.499964" stroke="#BDBDBD"/>
              </svg>

              
              </div>

              <button type="submit" id="f6">
              <div className="f6p">6 Films - $49.99</div>
              <div className="f6y">/ Year</div>
              <div className="dis">Upload 6 Film - Charged yearly - Non-refundable</div>
              </button>

              <div className="terms">By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18.</div>
              <svg id="box" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.9167 3.08333V22.9167H3.08333V3.08333H22.9167ZM22.9167 0.25H3.08333C1.525 0.25 0.25 1.525 0.25 3.08333V22.9167C0.25 24.475 1.525 25.75 3.08333 25.75H22.9167C24.475 25.75 25.75 24.475 25.75 22.9167V3.08333C25.75 1.525 24.475 0.25 22.9167 0.25Z" fill="#464779"/>
              </svg>
              <div className="agree">I agree</div>
              </div>     
    );
  }
}

export default App;
          
