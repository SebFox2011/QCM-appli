import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../constants/Styles';


export default function SubjectItem(props) {
  const {subject} = props;
  return (
    <TouchableOpacity style={styles.flatListItem} onPress={subject.questions > 0 ? props.onPress : null}>
      <Text>{subject.title}</Text>
      <Text style={styles.flatListItemBadge}>{subject.questions}</Text>
    </TouchableOpacity>
  );
}
