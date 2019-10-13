import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import styles from '../constants/Styles';

class QcmResultScreen extends Component {
  render() {
    const score = this.props.navigation.getParam('score');
    const total = this.props.navigation.getParam('total');

    return (
      <View>
        <Text>{score} / {total}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('QcmList')}>
          <Text>Retour à la liste</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QcmResultScreen;
