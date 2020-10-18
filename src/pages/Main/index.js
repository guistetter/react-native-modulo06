import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  }

  handleAddUser = () => {
    console.tron.log(this.state.newUser)
  }

  render(){
    const {newUser} = this.state;
    return (
      <Container>
        <Form>
          <Input autoCorret={false}
          autoCapitalizar="none"
          placeholder="Adicionar Usuario"
          value={newUser}
          onChangeText={text => this.setState({newUser: text})}
          />
          <SubmitButton onPress={this.handleAddUser}>
          <Icon name="add" size={40} color="#FFF"/>
          </SubmitButton>
        </Form>
      </Container>
    )
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
