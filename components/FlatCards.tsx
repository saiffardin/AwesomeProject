import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },

  container: {
    flexDirection: 'row',
  },

  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardOne: {
    backgroundColor: '#EF5354',
  },

  cardTwo: {
    backgroundColor: '#50DBB4',
  },

  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
