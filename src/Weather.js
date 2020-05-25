import React from 'react'

export default function Weather(props) {

            const weather = (<div className='weather-box'>
                        <div className='temp'>{`${Math.round(props.temp)}°c`}</div>
                        <div className='weather'>{props.weather} </div>
                        <span><img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='' className='icon'/></span>                       
                        </div>)
         
         const undefinedQuery = ((props.temp || props.weather !== undefined))
        const emptyQuery = ((props.temp || props.weather !== ''))

    return (    
        <div>
        {undefinedQuery?emptyQuery?weather:null:null}
        </div>
    )
}
