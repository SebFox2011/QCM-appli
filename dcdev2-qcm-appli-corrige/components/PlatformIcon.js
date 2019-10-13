import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function PlatformIcon(props) {
  const name = Platform.OS === 'ios' ? 'ios-' + props.name : 'md-' + props.name;
  return <Ionicons {...props} name={name} />;
}
