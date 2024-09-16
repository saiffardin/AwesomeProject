import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
  inputValue: string;
  setInputValue: (x: string) => void;
  resultValue: string;
}

const InputCurrency = (props: Props) => {
  const { inputValue, setInputValue, resultValue } = props;

  return (
    <View style={styles.topContainer}>
      <View style={styles.rupeesContainer}>
        <Text style={styles.rupee}>₹</Text>
        <TextInput
          maxLength={14}
          value={inputValue}
          clearButtonMode="always" //only for iOS
          onChangeText={setInputValue}
          keyboardType="number-pad"
          placeholder="Enter amount in Rupees"
        />
      </View>
      {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}
    </View>
  );
};

export default InputCurrency;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },

  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
});
