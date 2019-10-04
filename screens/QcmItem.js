import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {Button} from "native-base";

class QcmItem extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id:0
        }
    }

    findSubjectId(id) {
        //fetch(process.env.API_URL + '/subjects/'+id)
        fetch('http://92.167.212.55:8010/subjects/'+id)
            .then(response => response.json())
            .then(subjectsId => this.setState({
                subjectsId: subjectsId
            }));
    }

    render() {
        return(
            <View>
                <Text>Ecran QCM Item</Text>
                <Text>{this.state.id}</Text>
                <Button onPress={() => this.props.navigation.navigate('QcmResults')}>
                    <Text>Aller à QCM Résults</Text>
                </Button>
            </View>
        )
    }
}
export default QcmItem;