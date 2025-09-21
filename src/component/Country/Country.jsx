import React, { useState } from 'react';
import './Country.css'


const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    // console.log(country.capital.capital)
    const [visited,setVisited]=useState(false);
    console.log(handleVisitedCountries)
   
    const addHandle=()=>{
        // console.log('btn clicked')
        // 1.process

        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // 2.process

        // setVisited(visited ? false:true)


        // 3.process

        setVisited(!visited)
        handleVisitedCountries(country)
         
    }
    return (
        <div className={`country ${visited && 'Country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common}</h3>
            <p>Populations:{country.population.population}</p>
            <h4>Capital:{country.capital.capital}</h4>
            <p>Area:{country.area.area} {country.area.area>300000?'big country':'small country'}</p>
            <button onClick={addHandle}>{visited ?'visited':'Not visited'}</button>
            <button onClick={()=>{handleVisitedFlags(country?.flags?.flags?.png)}}>Add Visited flags</button>
        </div>
    );
};

export default Country;