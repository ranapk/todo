import React, {useState} from 'react';
import {StyleSheet, View, Switch, TextInput, Button, Text} from 'react-native';

export default function AddTodo({submitHandler}) {
  [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <View style={{flexDirection: 'row', marginBottom: 15, padding: 5}}>
        <Switch
          style={styles.Switch}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text>Priority</Text>
      </View>
      <Button color="#8BC34A" onPress={pressHandler} title="add todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  Switch: {
    alignSelf: 'flex-start',
  },
});
