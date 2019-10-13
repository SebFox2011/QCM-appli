import React, {Component} from 'react';
import {View, Text, CheckBox} from 'react-native';
import styles from '../constants/Styles';

class AnswerItem extends Component {

  render() {
    const {answer, checked, valueChange} = this.props;
    return (
      <View style={styles.answerItem}>
        <CheckBox value={checked} onValueChange={valueChange}/>
        <Text>{answer.title}</Text>
      </View>
    );
  }

}

export default AnswerItem;
