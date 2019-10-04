import React, {Component} from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import {Button, Container, Header, Body, Title, Text, Content, Footer, Badge} from 'native-base'


/*
* () => this.props.navigation.navigate('QcmItem')
* */

function Item({title, questions,id}) {
    return (
        <View style={{padding:10}}>
            <Button success rounded
                    onPress={()=> fetch('http://92.167.212.55:8010/subjects/'+id)
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
        //fetch(process.env.API_URL + '/subjects')
        fetch('http://92.167.212.55:8010/subjects')
            .then(response => response.json())
            .then(subjects => this.setState({
                subjects: subjects
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
                    <Button
                        title="Aller à QCM Item"

                        onPress={() => this.props.navigation.navigate('QcmItem', {
                            id: this.state.subjects._id
                        })}
                    />
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