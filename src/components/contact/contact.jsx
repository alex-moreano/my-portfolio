import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <div className="contact-form">
        <div className="s-leftside">
            <span>Comunicate conmigo</span>
            <span>contactame aqui: </span>
            <div className="r-blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="c-right">
            <form>
                <input type="text" name="name" className='user' placeholder='Nombres'/>
                <input type="email" name="email" className='user' placeholder='E-mail'/>
                <textarea name="message" className='user' placeholder='Escribe tu mensaje...'></textarea>
                <input type="submit" value="Enviar" className='button'/>
                <div className="r-blur c-blur" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
};

export default contact;