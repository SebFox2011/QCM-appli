import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NewQcm from '../screens/NewQcm';
import SettingsScreen from '../screens/SettingsScreen';
import QcmItem from "../screens/QcmItem";
import QcmResults from "../screens/QcmResults";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        QcmItem: QcmItem,
        QcmResults:QcmResults
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'QCM',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={'logo-nodejs'}
        />
    ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: NewQcm,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Proposer',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={'logo-python'}/>
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
