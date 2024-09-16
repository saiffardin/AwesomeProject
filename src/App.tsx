import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import InputCurrency from './components/InputCurrency';
import ForeignCurrencyList from './components/ForeignCurrencyList';

const App = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  return (
    <>
      <StatusBar />

      <View style={styles.container}>
        <InputCurrency
          inputValue={inputValue}
          setInputValue={setInputValue}
          resultValue={resultValue}
        />

        <ForeignCurrencyList
          inputValue={inputValue}
          setResultValue={setResultValue}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },

  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
