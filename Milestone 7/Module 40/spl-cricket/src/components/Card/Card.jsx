import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers }) => {
    
    const [isSelected, setIsSelected] = useState(false)
    const handleSelect = (playerData) => {
        const playerPrice = player.price.split(',').join('').split('USD').join('').split('BDT').join('');
        if(availableBalance < playerPrice){
       toast('You have not enough balance')
         return;
        }
        if(purchasedPlayers.length >= 6){
            toast('You can select maximum 6 players')
            return;
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData])
    };

    return (
        <div className="card bg-base-100 border-1 shadow-sm">
                <figure className='mx-auto mt-2 w-32 h-32 rounded-full border-4 border-blue-300'>
                    <img
                    src={player.player_Img}
                    alt={player.player_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{player.player_name}</h2>

                    <div className='flex justify-between border-b-2 pb-2'>
                        <div>{player.player_country}</div>
                        <button className="btn h-6 rounded-lg">{player.playing_role}</button>

                    </div>
                    
                    <div className='flex justify-between'>
                        <div>Rating</div>
                        <div>{player.rating}</div>
                    </div>
                    <div>
                        
                        <div className='flex justify-between'>
                            <div>{player.batting_style}</div>
                            <div>{player.bowling_style}</div>
                        </div>
                    </div>
                    <div className="card-footer flex justify-between items-center">
                        <div className='font-bold'>Price: {player.price}</div>
                        <div className="card-actions justify-end">
                            <button className="btn h-6 rounded-lg" disabled={isSelected} onClick={() => {handleSelect(player)}}>{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Card;