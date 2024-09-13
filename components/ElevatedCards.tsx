import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },

  container: {
    padding: 8,
  },

  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardElevated: {
    backgroundColor: '#CAD5E2',
  },
});
