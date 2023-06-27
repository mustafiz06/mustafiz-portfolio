import React from 'react';
import StrategyOption from '../StrategyOption/StrategyOption';
import './Strategy.css'

const Strategy = () => {
    const strategyOption =[
        {id:1, name:'Discussion', icon:'data:image/png;base64,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',description:'To Understand The Project Needs & Requirements It’s Very Important For Me, For That I Discuss With Every Details To Related Projects If Needed I Communicate By Video Or Audio Conversations.'},
        {id:2, name:'Planning', icon:'https://cdn-icons-png.flaticon.com/512/567/567014.png',description:'Then I Can Create A Plan For The Interior Projects. Planning Gives High Potential To Every Projects. Every Single Detail Listed In The Plan, When I Deliver, When I Need Website Data Form You.'},
        {id:3, name:'Design', icon:'https://cdn-icons-png.flaticon.com/512/3159/3159310.png',description:'I Give Highly Concentration To Website Design, Every Time I Try To Give My Best To Do Clean And Services Related Awesome Design For The Website. A Nice Design Can Improve Your Business Quality.'},
        {id:4, name:'Coding', icon:'https://www.seekpng.com/png/detail/304-3047371_coding-icon-programming-signs.png',description:'The Website Is Built By Web Language That’s Why We Need To Code For Every Website. It’s Very Important To Have Hand Coding, Clean And Developer Friendly Coding. I Give 100% Guarantee In All Of Them.'},
        {id:5, name:'Submit for Review', icon:'https://cdn-icons-png.flaticon.com/512/651/651191.png',description:'After Design And Coding, I Send For Review To Client. After Client’s Checking, If Have To Change Or Revision, I Say Client To Send All Of Them In A List And I Am Happy To Do All Changes Every Time.'},
        {id:6, name:'Website Is Ready!', icon:'data:image/png;base64,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',description:'After Reviewing Everything, We Are Going To The Final Step, If Everything Has Done, Then I Can Publish It For Everyone. In Every Project, I Make Sure To Give Full Support To The Clients.'},
    ]
    return (
        <div className='text-center mx-10 my-10'>
            <h1 className='text-4xl py-2 font-bold'>My Strategy</h1>
            <p className='text-2xl md:mx-56'>Hard work always pays off. I always try to make them 100% satisfied by providing quality services.</p>
            <div className="strategy-container grid gap-10 mt-10">
            {
                strategyOption.map(strategy=> <StrategyOption key={strategy.id} strategy={strategy}></StrategyOption>)
            }
            </div>
        </div>
    );
};

export default Strategy;