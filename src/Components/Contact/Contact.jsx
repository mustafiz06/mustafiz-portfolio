import React from 'react';
import emailjs from 'emailjs-com';
import ContactNav from '../ContactNav/ContactNav';
import { HiOutlinePhone, HiLocationMarker } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xtl7ddb', 'template_5jq7akk', e.target, 'kK1OkuCMhU7Znnmyy')
            .then((result) => {
                alert(`Message Send. You Send:`);
            }, (error) => {
                alert(`Message can't send.Check Your Connection then Try again.`)
            });
    };
    return (
        <div className='contact md:grid gap-10 mx-10 md:h-screen text-white'>
            <div className="form-contact p-5">
                <h1 className='text-2xl md:text-5xl text-center'>Get In Touch</h1>
                <p className='text-center text-sm md:text-2xl'>24/7 I will answer your questions & problems.</p>
                <form onSubmit={sendEmail} className='flex flex-col gap-3 mt-10'>
                    <input type="text" required name='name' placeholder="Name" className='px-10 py-1 md:py-5 border-2  text-black' />
                    <input type="email" required name='user-email' placeholder="Email" className='px-10 py-1 md:py-5 border-2 text-black' />
                    <textarea name="message" required id="" className='px-10 py-2 md:py-10 border-2 text-black'
                        placeholder="Your Message Here..."
                    ></textarea>
                    <button className='md:w-4/12 p-3 text-white text-xl md:text-2xl bg-aqua flex justify-center gap-2'>
                        <input type='submit' value='Send Now!' />
                        <FaPaperPlane />
                    </button>
                </form>
            </div>


            <div className="social-contact text-white flex flex-col justify-center p-5 md:bg-indigo-800">
                <h1 className='text-base md:text-4xl font-extrabold font-mono text-center'>Mustafiz</h1>

                <p className='flex items-center justify-center text-sm md:text-2xl'>
                    <HiOutlinePhone className='mr-2' />
                    <span>01787820606</span>
                </p>
                <p className='flex items-center justify-center text-sm md:text-2xl'>
                    <HiLocationMarker className='mr-2' />
                    <span>Jessore,Khulna,Bangladesh</span>
                </p>
                <p className='my-5 text-center text-xs md:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem velit, voluptatibus labore quia ducimus fuga. Fuga iure id sunt debitis!</p>
                <div className="links">
                    <ContactNav></ContactNav>
                </div>
            </div>
        </div>
    );
};

export default Contact;