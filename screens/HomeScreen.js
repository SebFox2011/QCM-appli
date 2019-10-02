import React, {Component} from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import {Button, Container, Header, Body, Title, Text, Content, Footer, Badge} from 'native-base'

export function Item({title, questions}) {
    return (
        <View style={{padding:10}}>
            <Button primary rounded>
                <Text>{title}</Text>
                <Badge>
                    <Text>{questions}</Text>
                </Badge>
            </Button>
        </View>
    );
}

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentDidMount() {
        this.findSubject();
    }

    findSubject() {
        fetch(process.env.API_URL + '/subjects')
            .then(response => response.json())
            .then(subjects => this.setState({
                subjects: subjects
            }));
    }


    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>QCM Titre page</Title>
                    </Body>
                </Header>
                <Content padder>
                    <ScrollView>
                        <FlatList
                            data={this.state.subjects}
                            renderItem={({item}) => <Item title={item.title} questions={item.questions}/>}
                            keyExtractor={item => item._id}
                        />
                    </ScrollView>
                </Content>
                <Footer/>
            </Container>
        );
    }
}

HomeScreen.navigationOptions = {
    title: 'QCM'
};

export default HomeScreen;