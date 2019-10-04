import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {Body, Container, Header,Footer, Title} from "native-base";

class QcmResults extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#dae8ff"}}>
                    <Body>
                        <Title>Ecran QCM Résults</Title>
                    </Body>
                </Header>
                <View>

                </View>
                <Footer/>
            </Container>
        );
    }
}

export default QcmResults;