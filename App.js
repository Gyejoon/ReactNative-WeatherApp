import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '742fef37d62d2d38d9d2c73df09a7b5b';

export default class App extends Component {

  state = {
    isLoaded: false,
    error: null,
    tempertaure: null,
    name: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    }, error => {
      this.setState({
        error: 'Location services are disabled'
      });
    });
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        tempertaure: json.main.temp,
        name: json.weather[0].main
      });
    })
    .catch(error => { console.log(error) });
  }

  render() {
    const { isLoaded , error, tempertaure, name} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? ( 
          <Weather temp={Math.floor(tempertaure - 273.15)} weatherName={name}/> 
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error ? <Text style={styles.errorText}> {error} </Text> : null}
          </View> 
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 100
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 10
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});