import React from 'react';
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import './contact.css';
import { useState } from 'react';

const Contact = () => {
const form = useRef();
const [done, setDone] = useState(false);
const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wh1xa3i', 'template_qg63bwo', form.current, '-3oEA5QE_26cu_MAm')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="contact-form">
        <div className="s-leftside">
            <span>Comunicate conmigo</span>
            <span>contactame aqui: </span>
            <div className="r-blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className='user' placeholder='Nombres'/>
                <input type="email" name="user_email" className='user' placeholder='E-mail'/>
                <textarea name="message" className='user' placeholder='Escribe tu mensaje...'></textarea>
                <input type="submit" value="Enviar" className='button'/>
                <span>{done && 'Gracias por contactarme, te contestare lo mas rapido que pueda'}</span>
                <div className="r-blur c-blur" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
};

export default Contact;