import React from 'react';
import {View} from 'react-native'
import {Badge, Button, Text} from "native-base";

export default function SettingsScreen() {
    return (
        <View>
            <View style={{padding: 10}}>
                    <Text>Text</Text>
                    <Badge danger>
                        <Text>Text</Text>
                    </Badge>
            </View>
            <View style={{padding: 10}}>
                <Button success rounded>
                    <Text>Text</Text>
                    <Badge danger>
                        <Text>Text</Text>
                    </Badge>
                </Button>
            </View>
        </View>
    );
}

SettingsScreen.navigationOptions = {
    title: 'Funny QCM',
};
