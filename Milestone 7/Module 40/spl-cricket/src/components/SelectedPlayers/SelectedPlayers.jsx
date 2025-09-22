import React from 'react';
import Selectedcard from '../Selectedcard/Selectedcard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
    return (
        <div className='max-w-[1200px] mx-auto gap-4'>
            {purchasedPlayers.map(player => (
                <Selectedcard key={player.id} player={player} removePlayer={removePlayer}></Selectedcard>
            ))}
        </div>
    );
};

export default SelectedPlayers;