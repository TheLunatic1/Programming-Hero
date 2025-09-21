import React from 'react';

const ButtonsC = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto my-4 flex justify-between items-center gap-4 font-bold'>
                <div className='font-bold text-2xl'>Available Players</div>
                <div>
                    <button className=' py-3 px-4 border-1 border-r-0 rounded-l-2xl rounded-r-0 bg-[#E7FE29]'>Available</button>
                    <button className=' py-3 px-4 border-1 border-l-0 rounded-r-2xl rounded-l-0'>Selected</button>
                </div>
            </div>
            
        </div>
    );
};

export default ButtonsC;