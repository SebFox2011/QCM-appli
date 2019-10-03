import React, {Component} from 'react';
import {View, Text} from 'react-native'

class QcmItem extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id:0
        }
    }

    findSubjectId(id) {
        fetch(process.env.API_URL + '/subjects/'+id)
            .then(response => response.json())
            .then(subjectsId => this.setState({
                subjectsId: subjectsId
            }));
    }

    render() {
        return(
            <View>
                <Text>Ecran QCM</Text>
                <Text>{this.props.id}</Text>
            </View>
        )
    }
}
export default QcmItem;