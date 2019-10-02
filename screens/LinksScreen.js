import React,{Component} from 'react';
import {Container, Picker, Item, Header, Content, Form, Icon} from "native-base";

export default class LinksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }

  onValueChange2(value:string) {
    this.setState({
      selected2: value
    });
  }

  render() {
      return (
          <Container>
            <Header />
            <Content>
              <Form>
                <Item picker>
                  <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      placeholder="Choisir un thème"
                      placeholderStyle={{ color: "#bfc6ea" }}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.selected2}
                      onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="PHP" value="key0" />
                    <Picker.Item label="Javascript" value="key1" />
                    <Picker.Item label="MongoDB" value="key2" />
                    <Picker.Item label="HTML" value="key3" />
                    <Picker.Item label="Python" value="key4" />
                  </Picker>
                </Item>
              </Form>
            </Content>
          </Container>
      )
    }
}

LinksScreen.navigationOptions = {
    title: 'Proposer',
};
