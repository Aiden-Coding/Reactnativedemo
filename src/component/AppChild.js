import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';

class AppChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }
  handeChangeName() {
    const nickName = 'Parry';
    this.setState({name: nickName});
    this.props.changeName(nickName);
  }
  render() {
    const {name} = this.state;
    return (
      <View>
        <Text>子组件：{this.state.name}</Text>
        <Button
          onPress={this.handeChangeName.bind(this)}
          title="修改name为parry"
        />
      </View>
    );
  }
}
export default AppChild;
