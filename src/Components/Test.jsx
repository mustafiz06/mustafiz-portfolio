import React from 'react';
import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaGithub, FaCode,FaThinkPeaks  } from 'react-icons/fa';
import { BiCode, BiCodeCurly, BiPen } from 'react-icons/bi';
import { HiChatAlt2,HiOutlinePhone } from 'react-icons/hi';
const Test = () => {
    return (
        <div className='bg-white flex text-5xl'>
            <div className="font-Awesome">
                <FaDribbble />
                <FaFacebook></FaFacebook>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                <FaLinkedinIn></FaLinkedinIn>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
                <FaGithub></FaGithub>
                <FaCode></FaCode>
                <FaThinkPeaks></FaThinkPeaks>
            </div>

            <div className="Box-Icon">
                <BiCode></BiCode>
                <BiCodeCurly></BiCodeCurly>
                <BiPen></BiPen>
                
            </div>
            <div className="hericon">
            <HiChatAlt2></HiChatAlt2>
            <HiOutlinePhone></HiOutlinePhone>
            </div>

            <div className='font-serif mx-10 mb-10 text-white'>

            {/* about section */}

            <div className='about-description grid gap-10'>
                <div className='about-image h-4/6 bg-aqua rounded-md p-2'>
                    <img className='h-full rounded-md' src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/143_533728_160122gmailpic_hero.jpg" alt="" />
                </div>
                <div className='about-content flex items-center h-4/6 bg-gray-700 text-white rounded-md border-s-8 border-s-green-700 p-5'>
                    
                    <p className='text-justify'>
                        I am Mustafizur Rahman. Introducing myself as a professional and passionate front-end web developer.
                        I have developed a huge number of web applications. Most comfortable with javascript. Familiar with frameworks like...
                        Bootstrap, Tailwind CSS, react.js, vue.js, nuxt.js. Besides, I have experience in UI/UX design and WordPress Customization.
                        Isn't it superb?😎. If it is then click on WhatsApp icon bellow and let me convert your dream into a web application.
                    </p>
                </div>
            </div>

            {/* expert section */}

            <div className="grid md:grid-cols-3 text-center gap-8 h-5/6">
                <div className='h-6/6 bg-gray-700 rounded-md p-5 flex flex-col gap-6 justify-center items-center'>
                    <h2 className='text-2xl font-bold text-white'>Web Design</h2>
                    <img className='h-3/6 w-4/6  rounded-full'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNBOFunjT4kLubDK3t5MXMWR-R8nX_SJlRA&usqp=CAU" alt="" />
                </div>
                <div className='h-6/6 bg-gray-700 rounded-md p-5 flex flex-col gap-6 justify-center items-center'>
                    <h2 className='text-2xl font-bold text-white'>Web Development</h2>
                    <img className='h-3/6 w-4/6  rounded-full'
                        src="https://png.pngitem.com/pimgs/s/127-1272268_business-plan-clipart-custom-web-application-development-hd.png" alt="" />
                </div>
                <div className='h-6/6 bg-gray-700 rounded-md p-5 flex flex-col gap-6 justify-center items-center'>
                    <h2 className='text-2xl font-bold text-white'>UI/UX Design</h2>
                    <img className='h-3/6 w-4/6 rounded-full'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEeBTUcfX7TvwFxWO-UwEIPX-6Rkhdrhjvc9CKKUJn8vKDeFwceVA_eyIQ_kK0jwUtyI&usqp=CAU" alt="" />
                </div>

            </div>
        </div>

        </div>
    );
};

export default Test;