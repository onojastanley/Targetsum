import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Game extends React.Component{
  static propTypes= {
    randomNumberCount: PropTypes.number.isRequired
  }
  target = 10 + Math.floor(40 * Math.random());
  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(()=>10 + Math.floor(40 * Math.random()) );
  target = this.randomNumbers
  .slice(0, this.props.randomNumberCount - 2)
  .reduce((acc, curr) => acc + curr, 0);

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.target}>{this.target}</Text>
  
  <Text>{this.randomNumbers}</Text> 
  <Text style={styles.target}>{this.props.randomNumberCount}</Text>  
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  target: {
    fontSize: 50,
    margin: 50,
    textAlign: 'center',
  },
});
