import React from 'react';
import StrategyOption from '../StrategyOption/StrategyOption';
import './Strategy.css'

const Strategy = () => {
    const strategyOption =[
        {id:1, name:'Discussion', icon:'static-images/discussion.png',description:'To Understand The Project Needs & Requirements It’s Very Important For Me, For That I Discuss With Every Details To Related Projects If Needed I Communicate By Video Or Audio Conversations.'},
        {id:2, name:'Planning', icon:'static-images/planning.png',description:'Then I Can Create A Plan For The Interior Projects. Planning Gives High Potential To Every Projects. Every Single Detail Listed In The Plan, When I Deliver, When I Need Website Data Form You.'},
        {id:3, name:'Design', icon:'static-images/web-design.png',description:'I Give Highly Concentration To Website Design, Every Time I Try To Give My Best To Do Clean And Services Related Awesome Design For The Website. A Nice Design Can Improve Your Business Quality.'},
        {id:4, name:'Coding', icon:'static-images/coding.png',description:'The Website Is Built By Web Language That’s Why We Need To Code For Every Website. It’s Very Important To Have Hand Coding, Clean And Developer Friendly Coding. I Give 100% Guarantee In All Of Them.'},
        {id:5, name:'Submit for Review', icon:'static-images/review.png',description:'After Design And Coding, I Send For Review To Client. After Client’s Checking, If Have To Change Or Revision, I Say Client To Send All Of Them In A List And I Am Happy To Do All Changes Every Time.'},
        {id:6, name:'Website Is Ready!', icon:'static-images/ready.png',description:'After Reviewing Everything, We Are Going To The Final Step, If Everything Has Done, Then I Can Publish It For Everyone. In Every Project, I Make Sure To Give Full Support To The Clients.'},
    ]
    return (
        <div className='text-center text-white h-full mx-10 my-10'>
            <h1 className='text-xl sm:text-2xl md:text-3xl py-2 font-bold'>My Strategy</h1>
            <p className='text-sm sm:text-xl md:text-2xl md:mx-56'>Hard work always pays off. I always try to make them 100% satisfied by providing quality services.</p>
            <div className="strategy-container grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {
                strategyOption.map(strategy=> <StrategyOption key={strategy.id} strategy={strategy}></StrategyOption>)
            }
            </div>
        </div>
    );
};

export default Strategy;