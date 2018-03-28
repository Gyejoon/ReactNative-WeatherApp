import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: 'Raining',
        subtitle: 'For more info look outside',
        icon: 'weather-rainy'
    },
    Sunny: {
        colors: ["#FEF253", "#FF7300"],
        title: 'Sunny',
        subtitle: 'Sunny is good Weather',
        icon: 'weather-sunny'
    },
    Lightning: {
        colors: ["#00ECBC", "#007ADF"],
        title: 'Lightning',
        subtitle: 'Actually, outside of the house',
        icon: 'weather-lightning'
    },
    Cloudy: {
        colors: ["#D7D2CC", "#304352"],
        title: 'Cloudy',
        subtitle: "I know, it's bad weather",
        icon: 'weather-cloudy'
    },
    Snowy: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: 'Snowy',
        subtitle: 'Do you want a build a snow man?',
        icon: 'weather-swnoy'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: 'Drizzle',
        subtitle: 'terrible weather',
        icon: 'weather-pouring'
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: 'Haze',
        subtitle: "Don't know what that is Haze",
        icon: 'weather-fog'
    }
};

export default function Weather({ temp, weatherName }) {
    const name = weatherCases[weatherName];
    return (
        <LinearGradient colors={name.colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={name.icon}/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{name.title}</Text>
                <Text style={styles.subtitle}>{name.subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24,
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
})