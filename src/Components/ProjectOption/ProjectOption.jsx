import React from 'react';

const ProjectOption = ({ project }) => {
    return (
        <div className=' bg-gray-700 rounded-md p-1 text-white'>
            <div className='flex justify-center'>
                <img className='h-20 project-image sm:h-24 md:h-36 md:w-4/5 pt-5' src={project.image} alt="" />
            </div>
            <div className='my-2 flex justify-around sm:grid-cols-2'>
                <span className='bg-indigo-800 p-1 sm:px-2 sm:py-1 md:px-3 md:py-2 text-xs sm:text-sm md:text-base rounded-md'> <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a></span>
                <span className='bg-indigo-800 p-1 sm:px-2 sm:py-1 md:px-3 md:py-2 text-xs sm:text-sm md:text-base rounded-md'> <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a></span>
            </div>
        </div>
    );
};

export default ProjectOption;