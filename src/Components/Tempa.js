import React, { useEffect, useState } from 'react'
import './css/Style.css'
export default function Tempa() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Punjab")

    useEffect(() =>{
        const myApi = async() =>{
            const url = `http://api.weatherapi.com/v1/current.json?key=b0863e4d7908459ea9485800220912&q=${search}&aqi=no`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.current)
            // console.log(resJson);
        };
        myApi();

    },[search])
  return (
    <>

        <div className='box'>
             <div className='inputData'>
                <input type="search"
                className='inputField'
                onChange={(e) => {setSearch(e.target.value)}}
                />
             </div>

        {!city ? (
            <p className='errorMsg'>No data found</p>) : (
    <div>
        <div className='info'>
            <h2 className='location'>
            <i className="fa-sharp fa-solid fa-street-view"></i>{search}
            </h2>
            <h1 className='temp'>
                {city.temp_c}deg Cel
            </h1>
            <h3 className='tempmin_max'>
                Min : {city.lat}deg Cel
                wind : {city.wind_mph} mph | {city.wind_kph} kph
            </h3>
        </div>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        </div>
        )}
    </div>
    </>
  )
}