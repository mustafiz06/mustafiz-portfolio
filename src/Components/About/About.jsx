import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='mx-10 text-white gap-10 py-10'>
            <h1 className='text-xl sm:text-2xl md:text-3xl py-5 font-bold text-center'>About</h1>

            <div className='about-description md:grid gap-10'>
                <div className='md:h-full bg-aqua rounded-md mb-5 p-2'>
                    <img className='h-full rounded-md' src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/143_533728_160122gmailpic_hero.jpg" alt="" />
                </div>
                <div className='flex items-center bg-gray-700 text-white rounded-md border-s-8 border-s-indigo-800 p-5'>
                    <p className='text-justify text-sm sm:text-xl md:text-2xl'>
                        I am Mustafizur Rahman. Introducing myself as a professional and passionate front-end web developer.
                        I have developed a huge number of web applications. Most comfortable with javascript. Familiar with frameworks like...
                        Bootstrap, Tailwind CSS, react.js, vue.js, nuxt.js. Besides, I have experience in UI/UX design and WordPress Customization.
                        Isn't it superb?😎. If it is then click on WhatsApp icon bellow and let me convert your dream into a web application.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;