import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';

const data = [
  { key: 'Item 1' },
  { key: 'Item 2' },
  { key: 'Item 3' },
  { key: 'Item 4' },
  { key: 'Item 5' },
  { key: 'Item 6' },
  { key: 'Item 7' },
  { key: 'Item 8' },
  { key: 'Item 9' },
  { key: 'Item 10' },
  { key: 'Item 11' },
  { key: 'Item 12' },
  { key: 'Item 13' },
  { key: 'Item 14' },
  { key: 'Item 15' },
  { key: 'Item 16' },
  
  // Add more items here...
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  itemText: {
    fontSize: 18,
  },
});

export default App;
