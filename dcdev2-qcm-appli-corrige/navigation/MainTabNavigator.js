import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import QcmListScreen from '../screens/QcmListScreen';
import QcmScreen from "../screens/QcmScreen";
import QcmResultScreen from "../screens/QcmResultScreen";
import QuestionFormScreen from "../screens/QuestionFormScreen";

const QcmStack = createStackNavigator(
  {
    QcmList: QcmListScreen,
    Qcm: QcmScreen,
    QcmResult: QcmResultScreen,
  }
);

QcmStack.navigationOptions = {
  tabBarLabel: 'QCM',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='list'
    />
  ),
};

QuestionFormScreen.navigationOptions = {
  tabBarLabel: 'Proposer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='create'
    />
  )
};

export default createBottomTabNavigator({
  QcmStack,
  QuestionFormScreen
});
