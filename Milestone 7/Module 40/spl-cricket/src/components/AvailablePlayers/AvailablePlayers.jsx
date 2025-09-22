import React from 'react';
import { use } from 'react';
import Card from '../Card/Card';

const AvailablePlayers = ({ playersPromise,setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers }) => {
    const playerData = use(playersPromise);
    console.log(playerData);
    return (

        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
            playerData.map(player => 
            <Card setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance}></Card>
            )
        }
            
        </div>
    );
};

export default AvailablePlayers;