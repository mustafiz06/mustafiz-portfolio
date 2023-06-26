import React from 'react';
import './SkillTopic.css'

const SkillTopic = ({ skillTopic }) => {
    return (
        <div className='skillTopic-Container flex flex-col justify-center items-center h-36 rounded-lg bg-gray-700'>
            <h2 className='text-white mb-5'>{skillTopic.name}</h2>
            <img className='h-12 w-12 rounded-full' src={skillTopic.logo} alt="" />
        </div>
    );
};

export default SkillTopic;