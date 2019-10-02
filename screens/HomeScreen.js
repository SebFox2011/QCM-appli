import React from 'react';
import {Text,} from 'react-native';
import {Button, Container, Header, Body, Title} from 'native-base'

function findSubject() {
  console.log('find subject');
  fetch();
}

export default function HomeScreen() {
  return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Button primary onPress={()=>findSubject()}>
          <Text>Essai bouton native bas</Text>
        </Button>
      </Container>
  );
}
HomeScreen.navigationOptions = {
  header: null,
};