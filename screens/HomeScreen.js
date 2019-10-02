import React, {Component} from 'react';
import {FlatList,View} from 'react-native';
import {Button, Container, Header, Body, Title, Text, Content, Footer, Badge} from 'native-base'

export  function Item({ title, questions }) {
    return (
        <View>
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
            subjects:[]
        }
    }

    componentDidMount() {
        this.findSubject();
    }

    findSubject() {
        fetch(process.env.API_URL+'/subjects')
            .then(response => response.json())
            .then(subjects => this.setState({
                subjects: subjects
            }));
        console.log(this.state.subjects);
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
                    <FlatList
                        data={this.state.subjects}
                        renderItem={({item})=><Item title={item.title} questions={item.questions}/>}
                        keyExtractor={item=>item._id}
                    />
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