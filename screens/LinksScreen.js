import React, {Component} from 'react';
import {Container, Button, Picker, Item, Header, Content, Form, Icon, Title, Body, Textarea, Input, Text} from "native-base";
import {View, Switch} from "react-native";

export default class LinksScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            question: '',
            answer:''
        };
    }

    onTitleChange(value) {
        this.setState({
            title: value
        });
    }

    onAreaChange(value) {
        this.setState({
            question: value
        });
    }

    onAnswerChange(value) {
        this.setState({
            answer: value
        });
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#dae8ff"}}>
                    <Body>
                        <Title>Proposer un QCM</Title>
                    </Body>
                </Header>
                <Content style={{padding: 10}}>
                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down"/>}
                                placeholder="Choisir un thème"
                                placeholderStyle={{color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.title}
                                onValueChange={this.onTitleChange.bind(this)}
                            >
                                <Picker.Item label="PHP" value="key0"/>
                                <Picker.Item label="Javascript" value="key1"/>
                                <Picker.Item label="MongoDB" value="key2"/>
                                <Picker.Item label="HTML" value="key3"/>
                                <Picker.Item label="Python" value="key4"/>
                            </Picker>
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Question"
                                  onChangeText={this.onAreaChange.bind(this)}/>
                        <View style={{flexDirection: 'row', padding: 10}}>
                            <Switch/>

                            <Input placeholder='Réponse 1'
                                   onChangeText={this.onAnswerChange.bind(this)}/>

                        </View>
                        <View style={{padding: 10}}>
                            <Button style={{height: 50, width: 50,marginBottom: 10}}>
                                <Text>+</Text>
                            </Button>
                            <Button success><Text>Terminer</Text>
                            </Button>

                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}

LinksScreen.navigationOptions = {
    title: 'Funny QCM',
};
