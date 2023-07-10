import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const QuantityCart = () => {
    const [count, setCount] = useState(0)
    const incrementHandle = () => {
        setCount(count => count + 1)
    }
    const decrementHandle = () => {
        if (count === 0) return 0
        setCount(count => count - 1)
    }
    return (
        <div className='-translate-x-20 flex gap-x-8 border w-[90px] border-gray-400 rounded-lg px-4 py-2'>
            <div className='centerAll w-[5px]'>{count}</div>
            <div className='grid gap-y-2'>
                <div className='cursor-pointer' onClick={incrementHandle}>
                    <FiChevronUp></FiChevronUp>
                </div>
                <div className='cursor-pointer' onClick={decrementHandle}>
                    <FiChevronDown></FiChevronDown>
                </div>
            </div>
        </div>
    );
};

export default QuantityCart;