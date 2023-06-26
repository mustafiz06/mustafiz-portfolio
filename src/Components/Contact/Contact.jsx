import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtl7ddb', 'template_5jq7akk', e.target, 'kK1OkuCMhU7Znnmyy')
      .then((result) => {
          console.log(result.text);
          alert('Message Send')
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='contact grid gap-10 mx-10 h-screen '>
            <div className="social-contact text-white flex flex-col justify-end p-5 bg-gray-700">
                <h1 className='text-3xl font-extrabold font-mono'>Mustafiz</h1>
                <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem velit, voluptatibus labore quia ducimus fuga. Fuga iure id sunt debitis!</p>
                <div className="links">
                    <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="#" target="_blank"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
            <div className="form-contact relative p-5">
                <h1 className='text-5xl'>Get In Touch</h1>
                <p>24/7 I will answer your questions & problems.</p>
                <form onSubmit={sendEmail} className='flex flex-col gap-3 mt-10'>
                    <input type="text" name='name' placeholder="Name" className='px-10 py-5 border-2 border-black' />
                    <input type="email" name='user-email' placeholder="Email" className='px-10 py-5 border-2 border-black' />
                    <textarea name="message" id="" className='px-10 pt-3 h-36 border-2 border-black'
                        placeholder="Your Message Here..."
                    ></textarea>

                    <input type='submit' value='Send Your message Now!' className='w-full p-3 text-white text-2xl absolute bottom-5 bg-green-700'/>

                </form>
            </div>
        </div>
    );
};

export default Contact;