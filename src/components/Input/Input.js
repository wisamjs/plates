import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../utils/colors';

const styles = {
  height: 40,
  borderColor: '#C7CED5',
  borderWidth: 1,
  marginTop: 10,
  marginBottom: 10,
  paddingLeft: 10,
};

export default function Input(props) {
  return (
    <TextInput
      style={styles}
      onChangeText={text => {
        props.onChangeText(text);
      }}
      {...props}
      placeholderTextColor={colors.alto}
    />
  );
}
