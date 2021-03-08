import './App.css'
import React from 'react';

const base_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
 
   
function Pokecard(props) {
    let imgSrc = `${base_API}${props.id}.png`;
    
    return (
        <div className='Pokecard'>
            <div className='pokecard-name'>{props.name}</div>
            <img className='pokecard-image' src={imgSrc} alt='' />
            <div className='pokecard-data'>Type: {props.type}</div>
            <div className='pokecard-data'>Experience: {props.base_experience}</div>
        </div>
    );
}

export default Pokecard;