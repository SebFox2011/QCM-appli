import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native'
import {Button, Badge, Content, Container, Body, Title, Header,Footer} from "native-base";

class QcmItem extends Component {
    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id');
        this.state = {
            id:id,
            subjects:[]
        }
    }

    findSubjectId(id) {
        //fetch(process.env.API_URL + '/subjects/'+id)
        fetch('http://92.167.212.55:8010/subjects/' + id)
            .then(response => response.json())
            .then(subjects => this.setState({
                subjects: subjects
            }));
        console.log(this.state.subjects)
    }

    componentDidMount() {
        this.findSubjectId(this.state.id);
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:"#dae8ff"}}>
                    <Body>
                        <Title>Ecran QCM Item</Title>
                    </Body>
                </Header>
                <Content padder>
                    <View style={{padding: 10}}>
                        <Text>{this.state.id}</Text>
                        <Text>{this.state.subjects.title}</Text>
                    </View>
                    <ScrollView>
                        <FlatList
                            data={this.state.subjects}
                            renderItem={
                                ({item}) => <Button><Text>{item.title}</Text><Badge><Text>{item.questions}</Text></Badge></Button>}
                            keyExtractor={item => item._id}/>
                    </ScrollView>
                    <View style={{padding: 10}}>
                        <Button style={{padding:10}} onPress={() => this.findSubjectId(this.state.id)}>
                            <Text>charger les questions</Text>
                        </Button>
                    </View>
                    <View style={{padding: 10}}>
                        <Button style={{padding:10}} onPress={() => this.props.navigation.navigate('QcmResults')}>
                            <Text>Aller à QCM Résults</Text>
                        </Button>
                    </View>
                </Content>
                <Footer/>
            </Container>
        )
    }
}

export default QcmItem;