import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries,setVisitedCountries]=useState([]);
    const[visitedFlags, setVisitedFlags]=useState([])
    const handleVisitedCountries=(country)=>{
        console.log('Click visited countries',country)
    const newVisitedCountries=[...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags=(flag)=>{
        const newVisitedFlags=[...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData=use(countriesPromise)
    const countries=countriesData.countries
   
    return (
        <div>
            <h1>In the Countries:{countries.length}</h1>
            <p>Total Visited Countries:{visitedCountries.length}</p>
            <p>Total Visited Flags:{visitedFlags.length}</p>
            {
                visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
            }
            <div className='visited-flag'>
                {
                    visitedFlags.map((flag,index)=> <img key={index} src={flag}></img>)
                }
            </div>
            <div className='Country'>
                {
                countries.map(country=> <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;