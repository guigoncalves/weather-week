import React from 'react';
import moment from 'moment';
import { List } from 'antd';

import sun from '../images/sun.svg';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import thunderstorm from '../images/thunderstorm.png';
import cloud from '../images/cloud.png';

const icons = {
    'Thunderstorm': thunderstorm,
    'Drizzle': rain,
    'Rain': rain,
    'Snow': snow,
    'Atmosphere': sun,
    'Clear': sun,
    'Clouds': cloud
}

class Forecast extends React.Component {
    
    getDateString(dt) {
        const dtMultiplier = 1000;
        const date = moment(dt * dtMultiplier);
        console.log(date.format("DD/MM/YYYY"));
        return date.format("DD/MM/YYYY");
    }
    
    render() {
        return (
            <List
                itemLayout="horizontal"
                bordered
                dataSource={this.props.forecast}
                renderItem={item => {
                    const weather = item.weather[0];
                    return (
                        <List.Item style={{paddingTop: 2, marginBottom: 20 }}>
                            <h2>{this.getDateString(item.dt) + " - " + weather.main}</h2>
                            <img src={icons[weather.main]} alt={weather.main} className="photo" />
                            <p>Rain: {item.rain || 0 } mm</p>
                            <p>Wind: {item.wind_speed || 0 } m/s</p>
                        </List.Item>
                    )
                }}
            />
        )
    }
}

export default Forecast;