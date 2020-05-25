import React, { Component } from 'react'
import './App.css'
import Location from './Location'
import Weather from './Weather'

const apiKey = 'fa699bb89b8d85c2ee24473c0163b7cd';

export default class App extends Component {

    state = {
        background: `app`,
        place: '',
        country: '',
        temp: '',
        weather: '',
        err: ''
    }

    getDate = (d) => {
            const days = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
            const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July',
             'August', 'September', 'October', 'November','December']
    
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`
        }

        getWeather = async (e) => {
                if (e.key === 'Enter')
                {
                    if(e.target.value === ''){
                        return null
                    }
                    else {
                    e.persist()
                    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&units=metric&appid=${apiKey}`);
                    const openWeather = await data.json()
                    console.log(openWeather)
                    if(openWeather.cod === '404'){
                    this.setState({
                        err: openWeather.cod,
                        background: `app`,
                        place: '',
                        country: '',
                        temp: '',
                        weather: '',
                                    })
                }
                else{
                    this.setState({
                        background: `app ${openWeather.weather[0].main.toLowerCase()}`,
                        place: openWeather.name,
                        country: openWeather.sys.country,
                        temp: openWeather.main.temp,
                        weather: openWeather.weather[0].main,
                        icon: openWeather.weather[0].icon,
                        err: ''
                    })
                }
                }
            }


            }

    render() {
        return (
            <div className={this.state.background}>
                <div className='search-box'>
                    <input className='search-bar' type='text' placeholder='Search...' onKeyPress={(e) => this.getWeather(e)}>
                    </input>
                </div>
                <Location getDate={this.getDate} place={this.state.place} country={this.state.country} err= {this.state.err}  />
                <Weather temp={this.state.temp} weather={this.state.weather} icon={this.state.icon} />
            </div>
        )
    }
}
