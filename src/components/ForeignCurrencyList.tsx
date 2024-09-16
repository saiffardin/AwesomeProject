import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { currencyByRupee } from '../utils/constants';
import CurrencyButton from './CurrencyButton';

interface Props {
  inputValue: string;
  setResultValue: (x: string) => void;
}

const ForeignCurrencyList = (props: Props) => {
  const { inputValue, setResultValue } = props;

  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);

    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'NOt a valid number to convert',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      });
    }
  };

  return (
    <View style={styles.bottomContainer}>
      <FlatList
        numColumns={3}
        data={currencyByRupee}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.button,
              targetCurrency === item.name && styles.selected,
            ]}
            onPress={() => buttonPressed(item)}>
            <CurrencyButton {...item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default ForeignCurrencyList;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 3,
  },

  button: {
    flex: 1,

    margin: 12,
    // height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  selected: {
    backgroundColor: '#ffeaa7',
  },
});
