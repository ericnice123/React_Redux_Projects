import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactSparkline, { Sparklines, SparklinesLine } from 'react-sparklines';

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

        return (
            <tr key={cityData.city.id} >
                <td >
                    { cityData.city.name }
                </td>
                <td>
                    <Sparklines data={ temperature }>
                        <SparklinesLine />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={ pressure }>
                        <SparklinesLine />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={ humidity }>
                        <SparklinesLine />
                    </Sparklines>
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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