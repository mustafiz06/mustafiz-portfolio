
import React from 'react';

const StrategyOption = ({strategy}) => {
    return (
        <div className='bg-gray-700 p-3 text-white flex flex-col items-center'>
            
            <img className='h-36 w-36 pt-5' src={strategy.icon} alt="" />
            <h1 className='text-3xl font-bold my-3'>{strategy.name}</h1>
            <p className='mx-5 mb-5'>{strategy.description}</p>
        </div>
    );
};

export default StrategyOption;