import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { RiFacebookCircleLine, RiLinkedinBoxFill} from "react-icons/ri";
import AlertBox from "./AlertBox";
import "./contact.css";
import Avatar from "../header/Avatar";
import { Link } from "react-router-dom";
function Contact() {
  const form = useRef();
  const isEmpty = (value) => value.trim() === '';
  const [values, setValues] = useState({
    name: "",
    email:'',
    message: "",
   
  });
  
  const [formErrors,setFormErrors]=useState({})
  const[isSubmit,setIsSubmit]=useState(false)

  
  const [status, setStatus] = useState("");
const validate=(values)=>{
  const errors={}
    const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!values.name){
      errors.name='Full name is required!'
    }
    if(!values.message){
      errors.email='E-Mail is required!'
    }
    else if(!regex.test(values.email))
    {errors.email='Please write a valid email format!'}
    if(!values.message){
      errors.message='Message is required!'
    }
    return errors;
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values))
    setIsSubmit(true)

    emailjs
      .sendForm(
        "service_aauzub7",
        "template_whgniqi",
        form.current,
        "cOOmGnm-QnHY5X2Xk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        setStatus("SUCCESS"),
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      localStorage.clear();

  };

  useEffect(() => {
    if (status === "SUCCESS" ) {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }

); 
useEffect(()=>{
  console.log(formErrors)
   if(Object.keys(formErrors).length===0&&isSubmit){
console.log(values)
}
},[formErrors]
)
  

  return (

    <div name='contact'className="threejs-wrapper">    <Avatar/>
      <div className="contact-content contact-container">
        {status &&Object.keys(formErrors).length===0&&isSubmit?( <AlertBox className="alertbox" />):console.log('Failed!')}
        <h2><i>Reach me out!</i></h2>

        <div className="box">
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
             
              <input
                className="input"
                placeholder="Full name"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <p>{formErrors.name}</p>
            
     <input
                className="input"
                placeholder="E-Mail"
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
        <p>{formErrors.email}</p>
              <textarea
                placeholder="Message . . ."
                name="message"
                onChange={handleChange}
                value={values.message}
              />
                      <p>{formErrors.message}</p>
                   
           <input  className="send-btn" type="submit" value="Send" />
            </form>
          </div>
          <div className="contact-info">    <div className="contact-box">
             <a href='https://www.facebook.com/elmenda.lushaj'><RiFacebookCircleLine  className="white-icon social" />{" "}</a> 
           <a href='https://www.linkedin.com/in/elmenda-lushaj-76b829197/'><RiLinkedinBoxFill className="white-icon social"/></a>
            </div>
            <div className="contact-box">
              <FiPhoneCall className="white-icon" />{" "}
              <label> +383 xxxxxxx</label>
            </div>
            

        

            <div className="contact-box">
              <FiMail className="white-icon" />{" "}
              <label>elmendalushaj@gmail.com </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  }
export default Contact;