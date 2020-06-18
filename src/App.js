import React from 'react';
import './app.css';
import Forecast from './components/Forecast';
import { getDaily } from './apis/Openweather';
import { SAO_PAULO_LAT, SAO_PAULO_LNG } from './consts';

class App extends React.Component {
 
  state = {
    coords: { 
      lat: SAO_PAULO_LAT,
      lng: SAO_PAULO_LNG
    },
    dailyForecast: []
  }

  async componentDidMount () {  
    // get current position
    this.updateForecast();

    window.navigator.geolocation.getCurrentPosition(position => {
      this.setState({ coords: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }}, () => this.updateForecast())
    });
  }

  async updateForecast() {
    //get daily forecast based on coordinates
    const forecastResponse = await getDaily(this.state.coords);
    this.setState({ dailyForecast: forecastResponse.daily })
  };


  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
            <Forecast forecast={this.state.dailyForecast}/>        
      </div>
    );
  }
    
}


export default App;
