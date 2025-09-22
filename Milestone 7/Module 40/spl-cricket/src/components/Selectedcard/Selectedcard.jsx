import React from 'react';


const Selectedcard = ({ player, removePlayer }) => {
    const handleRemove = () => {
        removePlayer(player);
    }
    return (
        <div>
            <div className='border-2 rounded-lg flex justify-between items-center p-4 m-2'>
                <div className='flex flex-row gap-4'>
                    <div>
                        <img className='w-16 h-16 rounded-lg' src={player.player_Img} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1>{player.player_name}</h1>
                        <h1>{player.playing_role}</h1>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    X
                </div>
            </div>
        </div>
    );
};

export default Selectedcard;