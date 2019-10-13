import React, {Component} from 'react';
import {View, TextInput, Switch} from 'react-native';
import styles from '../constants/Styles';

class AnswerFormItem extends Component {

  render() {
    const {answer, valueChange, textChange} = this.props;
    return (
      <View style={styles.answerItem}>
        <Switch value={answer.isCorrect} onValueChange={valueChange}/>
        <TextInput style={styles.textInput} value={answer.title} onChangeText={text => textChange(text)}/>
      </View>
    );
  }

}

export default AnswerFormItem;
