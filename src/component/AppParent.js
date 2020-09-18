import React, {Component} from 'react';
import AppChild from './AppChild';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

class AppParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }
  handeChangeName(nickName) {
    this.setState({name: nickName});
  }
  render() {
    return (
      <View>
        <Text>父组件的name:{this.state.name}</Text>
        <AppChild
          name={this.props.name}
          changeName={(val) => {
            this.handeChangeName(val);
          }}
        />
      </View>
    );
  }
}
export default AppParent;
