import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.scss'
import { FaEnvelope} from 'react-icons/fa';

export default function ContactUs(){
    const [message, setMessage] = useState(''); 
    const [ isMessageVisible, setIsMessageVisible ] = useState(false);

    const handleButtonClick = () => {
          setIsMessageVisible(true);

          setTimeout(() => {
         setIsMessageVisible(false);
         setMessage('');
     }, 5000);
    }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6drovk', 'template_qmbgo6q', form.current, 'TQYQMH7h8HmEd0qMG')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
          setMessage('Message envoyé, Merci.')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setMessage('Message non envoyé, vous pouvez me contacter par email.')
      });
  };

  return (<>
  <div className="contact__form__container">
      <div className='contact__title'>  
        <h2>  Me contacter</h2>
        <span><FaEnvelope/></span>
       </div>
 
    <form className='contact__form' ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="user_name" /> */}
      <label>Email</label>
      <input type="email" name="user_email" />
      <label htmlFor=''>Message</label>
      <textarea  name="message" />
      <input  onClick={handleButtonClick} type="submit" value="Envoyer" />
    </form>
    <span className='py-4 '>{message}</span>
    </div>
    </>);
};
