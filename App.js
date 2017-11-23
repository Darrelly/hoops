import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from 'react-native-calendar';
import { MapView } from 'expo';

const customStyle = {
  calendarContainer: {
    backgroundColor: 'blue',
  },
}
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calendar customStyle={customStyle} />
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.8888,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
