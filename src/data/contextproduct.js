import React, { Component } from 'react'
import axios from 'axios';
import * as moment from 'moment';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        Year: '',
        Month: '',
        Day: '',
        Hour: '',
        Min: '',
        Sec: '',
        AMPM: '',
        WorldCovidCaseData: '',
        News: '',
        RealTimeWeather: ''
    }

    componentDidMount(){
        var moment = require('moment')
        this.setState({
            Year: moment().format('YYYY'),
            Month: moment().format('MM'),
            Day: moment().format('DD'),
            Hour: moment().format('hh'),
            Min: moment().format('mm'),
            Sec: moment().format('ss'),
            AMPM: moment().format('A')
        })

        navigator.geolocation.getCurrentPosition( (position) => {
            var self = this
            axios({
                method: 'GET',
                url: 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+position.coords.latitude+'&longitude='+position.coords.longitude+'&localityLanguage=en',
            })
            .then(
                response => {
                    axios({
                        method: 'GET',
                        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                        params: {q: response.data.localityInfo.administrative[3].name},
                        headers: {
                            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                            'x-rapidapi-key': '304f2e9db0mshff84ec55187266ep19d059jsn59a263cb54e2'
                        }
                    })
                    .then(
                        response => {
                            this.setState({
                                RealTimeWeather: response.data
                            })
                        }
                    )
                }
            )

        });


        axios({
            method: 'GET',
            url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
            headers: {
                'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
                'x-rapidapi-key': '304f2e9db0mshff84ec55187266ep19d059jsn59a263cb54e2'
            }
        })
        .then(
            response => {
                this.setState({
                    WorldCovidCaseData: response.data
                })
            }
        )

        axios({
            method: 'GET',
            url: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=da71d399f1e943ce880feb2a9fb8ccf7'
        })
        .then(
            response => {
                this.setState({
                    News: response.data.articles
                })
            }
        )

    }

    render() {
        const {
           Year, Month, Day, Hour, Min, Sec, AMPM, WorldCovidCaseData, News, RealTimeWeather
        }
        = this.state;
        const {
                
            }
        = this;
        
        return (
            <DataContext.Provider 
            value={
                {
                   Year, Month, Day, Hour, Min, Sec, AMPM, WorldCovidCaseData, News, RealTimeWeather
                }
            }>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}