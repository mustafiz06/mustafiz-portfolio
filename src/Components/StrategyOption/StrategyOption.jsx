
import React from 'react';
import './StrategyOption.css'

const StrategyOption = ({strategy}) => {
    return (
        <div className='bg-aqua strategy-option rounded-md p-3 text-white flex flex-col items-center'>
            
            <img className='h-20 sm:h-24 md:h-36 md:w-36 pt-5' src={strategy.icon} alt="" />
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold my-3'>{strategy.name}</h1>
            <p className='text-sm sm:text-base md:text-xl mx-5 mb-5'>{strategy.description}</p>
        </div>
    );
};

export default StrategyOption;