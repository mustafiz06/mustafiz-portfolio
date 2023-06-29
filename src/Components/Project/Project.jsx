import React from 'react';
import ProjectOption from '../ProjectOption/ProjectOption';

const Project = () => {
    const projectOption = [
        { id: 1, name: 'Discussion', image: 'images/project-images/portfolio.png', demo: 'https://mustafiz.netlify.app/', code: 'https://github.com/mustafiz06/mustafiz-portfolio' },
        { id: 2, name: 'Discussion', image: 'images/project-images/youtube.png', demo: 'https://mustafiz.netlify.app/', code: 'https://github.com/mustafiz06/mustafiz-portfolio' },
        { id: 3, name: 'Discussion', image: 'images/project-images/portfolio.png', demo: 'https://mustafiz.netlify.app/', code: 'https://github.com/mustafiz06/mustafiz-portfolio' },
        { id: 4, name: 'Discussion', image: 'images/project-images/portfolio.png', demo: 'https://mustafiz.netlify.app/', code: 'https://github.com/mustafiz06/mustafiz-portfolio' },
        { id: 5, name: 'Discussion', image: 'images/project-images/portfolio.png', demo: 'https://mustafiz.netlify.app/', code: 'https://github.com/mustafiz06/mustafiz-portfolio' },
        { id: 6, name: 'Discussion', image: 'images/project-images/portfolio.png', demo: 'https://mustafiz.netlify.app/', code: 'https://github.com/mustafiz06/mustafiz-portfolio' },
    ]
    return (
        <div>
            <div className='text-center text-white h-full mx-10 my-10'>
                <h1 className='text-xl sm:text-2xl md:text-3xl py-2 font-bold'>My Projects</h1>
                <p className='text-sm sm:text-xl md:text-2xl md:mx-56'>Hard work always pays off. I always try to make them 100% satisfied by providing quality services.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-10">
                    {
                        projectOption.map(project => <ProjectOption key={project.id} project={project}></ProjectOption>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;