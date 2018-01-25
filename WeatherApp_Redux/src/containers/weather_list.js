import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    constructor( props ) {
        super( props );

    }

    renderWeather( cityData ) {

        const temperature = cityData.list.map( data => {
            return data.main.temp;
        });

        const pressure = cityData.list.map( data => {
            return data.main.pressure;
        }); 

        const humidity = cityData.list.map( data => {
            return data.main.humidity;
        });

        const { lon, lat } = cityData.city.coord;
        
        return (
            <tr key={cityData.city.id} >
                <td >
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={ temperature } color='orange' type='avg' units='K'/>
                </td>
                <td>
                    <Chart data={ pressure } color='green' type='avg' units='hPa'/>
                </td>
                <td>
                    <Chart data={ humidity } color='grey' type='avg' units='%'/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map( this.renderWeather ) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( { weather } ) {
    return { weather };
}

export default connect( mapStateToProps, null )( WeatherList );