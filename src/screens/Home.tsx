import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';

//React navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';

import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

// data
import { PRODUCTS_LIST } from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackPramList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  const handleNavigation = (item: Product) => {
    navigation.navigate('Details', {
      product: item,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleNavigation(item)}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
