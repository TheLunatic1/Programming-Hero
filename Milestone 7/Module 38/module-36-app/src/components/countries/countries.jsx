import React, {use , useState} from 'react';
import Country from '../Country/Country';
import './cs.css'


const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCount, setVisitedCount] = useState([]);
    const handleVisitedChange = (country) => {
        const newVisitedCount = [...visitedCount, country];
        setVisitedCount(newVisitedCount);
    }

    return (
        
        <div>

            <h1>In the countries: {countries.length}</h1>
            {/* visited button clicked country count */}
            <h3>Total countries visited: {visitedCount.length}</h3>
            <ol>
                {
                    visitedCount.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className="countries">
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedChange={handleVisitedChange}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;