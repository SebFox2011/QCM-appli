import React, {Component} from 'react';
import {View, Text} from 'react-native'

class QcmItem extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id:0
        }
    }

    render() {
        return(
            <View>
                <Text>Ecran QCM</Text>
            </View>
        )
    }
}
export default QcmItem;