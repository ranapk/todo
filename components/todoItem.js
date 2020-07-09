import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export default function TodoItem({pressHandler, item}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Icon name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  },
});
