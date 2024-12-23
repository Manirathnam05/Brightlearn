import React from 'react';
import "./Contact.css";
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import location_icon from "../../Assets/location-icon.png";
import white_arrow from"../../Assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a5f489b4-8684-41b1-bc94-ece6efc587fc");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={msg_icon} className='msgicon'/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            
            <ul className='icons'>
                <li><img src={mail_icon}/>manirathnam252k@gmail.com</li>
                <li> <img src={phone_icon}/>  +1 123-456-7890</li>
                <li> <img src={location_icon}/>  2/783,kumbakonam,thanjavur,<br/>tamilnadu,pincode:612001,india</li>
           </ul>
        </div>
   
      <div className='contact-col'>
        <form  autoComplete='off' spellCheck="off" onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' placeholder='Enter your name' required/>
           
            <label>Phone Number</label>
            <input type='tel' placeholder='Enter your mobile number' required/>
            
            <label>Your Email</label>
            <input type='text' placeholder='Enter your email id' required/>
        
                <label>Write your messages here</label>
                <textarea  name="message" rows="6" placeholder='Enter your message' required></textarea>
        
            <button type='submit' className='btn form-btn'>submit now<img src={white_arrow}/></button>


        </form>
        <span id='result'>{result}...</span>

      </div>
    </div>
  )
}

export default Contact;

