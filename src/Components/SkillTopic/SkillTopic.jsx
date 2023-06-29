import React from 'react';

const SkillTopic = ({ skillTopic }) => {
    return (
        <div className=' hover-shadow flex flex-col justify-center items-center p-5 rounded-lg bg-gray-700'>
            <h2 className='text-white mb-2 md:mb-5'>{skillTopic.name}</h2>
            <img className='h-8 md:h-12 rounded-full' src={skillTopic.logo} alt="" />
        </div>
    );
};

export default SkillTopic;