import React from 'react'

export default function Location(props) {

        let location, title, error;
        
             location =  (<div className='location-box'>
                                <div className='location'>{`${props.place}, ${props.country}`}</div>
                                <div className='date'>{props.getDate(new Date())}</div>
                                </div>)

            title = (<div><div className='location-box'>
            <div className='title'>{`WORLD TEMPs`}</div>
            <div className='date'>{props.getDate(new Date())}</div>
            </div>
            <div className='info-box'>
                    <div className='info'>
                        Get Weather Information from places around the globe.
                    </div>
                </div></div>)

            error = (<div className='error-box'>
                <div className='error'>{`No weather for this location available.`}</div>
            </div>)
        const undefinedQuery = ((props.place !==undefined) || (props.country !==undefined))
        const emptyQuery = ((props.place !=='') || (props.country !==''))
       

    return (
        <div>
            {undefinedQuery?emptyQuery?location:title:null}
            {(props.err==='404'?error:null)}
            </div>   
    )
}
