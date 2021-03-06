import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import ChildComponent from './src/component/ChildComponent';
import AppParent from './src/component/AppParent';
const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      {/* 父子通信 */}
      {/* <ChildComponent name="React"></ChildComponent> */}
      <AppParent name='PARENT'/>
    </ScrollView>
  );
};

export default App;
