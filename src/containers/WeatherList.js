import React, { Component } from 'react';
import { connect } from 'react-redux';
import GraphLine from '../components/GraphLine';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
    renderWeather = cityData => {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => Math.floor(weather.main.temp));
        const pressures = cityData.list.map(weather => Math.floor(weather.main.pressure));
        const humidity = cityData.list.map(weather => Math.floor(weather.main.humidity));

        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td>
                    <GraphLine data={temps} color='red' units='K' />
                </td>
                <td>
                    <GraphLine data={pressures} color='green' units='hPa' />
                </td>
                <td>
                    <GraphLine data={humidity} color='black' units='%' />
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
