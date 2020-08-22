import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Game extends React.Component{
  static propTypes= {
    randomNumberCount: PropTypes.number.isRequired
  }

  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(()=>1 + Math.floor(10 * Math.random()) );
  target = this.randomNumbers
  .slice(0, this.props.randomNumberCount - 2)
  .reduce((acc, curr) => acc + curr, 0);

  render(){
  return (
    <View style={styles.container}>
     <Text style={styles.target}>{this.target}</Text>
  <View style={styles.randomContainer}>
  {this.randomNumbers.map((randomNumber,index)=> <Text style={styles.random} key={index}>{randomNumber}</Text> )
  }
  </View>
  
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
    backgroundColor: '#bbb',
    width: 200,
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  random: {
    backgroundColor: '#999',
    width: 100,
    height: 50,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});
