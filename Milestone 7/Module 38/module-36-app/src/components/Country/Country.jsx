import React from 'react';
import { useState } from 'react';
import './c.css'

const Country = ({ country , handleVisitedChange }) => {
    const [visited, setVisited] = useState(false);
    const handleNotVisited = () => {
        //click to change button text to "Visited" and again click to change button text to "Not Visited"
        setVisited(!visited);
        handleVisitedChange(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            
            <h3>Name: {country.name.common}</h3>
            <h3>Official name: {country.name.official}</h3>
            <h3>Population: {country.population.population}</h3>
            <h3>Area:  {country.area.area} {country.area.area > 30000 ? 'Large Country' : 'Small Country'}</h3>
            <button onClick={handleNotVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;


// {
// "name": {
// "common": "Jamaica",
// "official": "Jamaica"
// },
// "ccn3": {
// "ccn3": "388"
// },
// "currencies": {
// "currencies": {
// "JMD": {
// "name": "Jamaican dollar",
// "symbol": "$"
// }
// }
// },
// "capital": {
// "capital": [
// "Kingston"
// ]
// },
// "region": {
// "region": "Americas"
// },
// "languages": {
// "languages": {
// "eng": "English",
// "jam": "Jamaican Patois"
// }
// },
// "area": {
// "area": 10991
// },
// "cca3": {
// "cca3": "JAM"
// },
// "population": {
// "population": 2961161
// },
// "continents": {
// "continents": [
// "North America"
// ]
// },
// "flags": {
// "flags": {
// "png": "https://flagcdn.com/w320/jm.png",
// "svg": "https://flagcdn.com/jm.svg",
// "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
// }
// }
// }