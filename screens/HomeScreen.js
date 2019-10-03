import React, {Component} from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import {Button, Container, Header, Body, Title, Text, Content, Footer, Badge} from 'native-base'
import QcmItem from './QcmItem'

/*
* () => this.props.navigation.navigate('QcmItem')
* */

export function Item({title, questions,id}) {
    return (
        <View style={{padding:10}}>
            <Button success rounded
                    onPress={()=> fetch(process.env.API_URL + '/subjects/'+id)
                        .then(response => response.json())
                        .then((data) => console.log(data))}>
                <Text>{title}</Text>
                <Badge danger>
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
            subjects: [],
            subjectsId:[]
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

    findSubjectId(id) {
        fetch(process.env.API_URL + '/subjects/'+id)
            .then(response => response.json())
            .then(subjectsId => this.setState({
                subjectsId: subjectsId
            }));
    }


    render() {
        return (
            <Container>
                <Header style={{backgroundColor:"#dae8ff"}}>
                    <Body>
                        <Title>QCM Titre page</Title>
                    </Body>
                </Header>
                <Content padder>
                    <ScrollView>
                        <FlatList
                            data={this.state.subjects}
                            renderItem={
                                ({item}) => <Item title={item.title}
                                                  questions={item.questions}
                                                  id={item._id} />}
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
    title: 'Funny QCM'
};

export default HomeScreen;