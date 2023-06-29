import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import { HiDownload } from 'react-icons/hi';
import ContactNav from '../ContactNav/ContactNav';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-parent">
                <div className="home-details flex flex-col h-screen	justify-center font-serif">
                    {/* <div className="colz flex gap-2 justify-center text-white md:text-3xl">
                        <a href="https://www.facebook.com/lxmustafiz" target="_blank" > <FontAwesomeIcon icon={faTrash} /> </a>
                        <a href="#" target="_blank" > <FontAwesomeIcon icon={faCartShopping} /> </a>
                        <a href="#" target="_blank" > <FontAwesomeIcon icon={faTrash} /> </a>
                        <a href="#" target="_blank" > <FontAwesomeIcon icon={faTrash} /> </a>
                        <a href="#" target="_blank" > <FontAwesomeIcon icon={faTrash} /> </a>
                    </div> */}
                    <div className="profile-details-name flex justify-center items-center ">
                        <span className="text-white text-xl md:text-3xl pr-3">I am</span>
                        <span className='my-5 before:block before:absolute before:-inset-1
                         before:-skew-y-3 before:bg-indigo-800 relative inline-block'>
                            <span className='text-3xl md:text-5xl relative text-white font-bold'>Mustafiz</span>
                             
                             </span>
                    </div>
                    <div className="profile-details-role text-center  py-2">
                        <span className='text-2xl md:text-6xl text-white font-bold font-mono'>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Dev',
                                    1000,
                                    'MERN Stack Dev',
                                    1000,
                                    'Cross Platform Dev',
                                    1000,
                                    'React Dev',
                                    1000
                                ]}
                                wrapper="span"
                                speed={300}
                                repeat={Infinity}
                            />
                        </span>
                    </div>
                    <div className="profile-role-tagline text-white text-center mx-10 my-5 md:mx-40 text-xs md:text-base">
                        <span>
                        I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.
                        </span>
                    </div>
                    <div className="profile-option flex justify-center my-5 gap-5">
                        <button className='rounded-full bg-aqua md:text-2xl px-5 py-2 text-white font-bold w-36 md:w-48'>Hire Me</button>
                        <a href="Mustafizur Rahman-RESUME.pdf" download='Mustafizur Rahman-RESUME.pdf'>
                            <button className='rounded-full flex  justify-center items-center bg-aqua md:text-2xl px-5 py-2 text-white font-bold md:w-48'>
                                <HiDownload></HiDownload>
                                Resume
                            </button>
                            
                        </a>
                    </div>
                    <ContactNav></ContactNav>
                </div>
            </div>
        </div>
    );
};
export default Home;

