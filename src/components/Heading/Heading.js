import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const h1 = {
  color: colors.tundora,
  fontSize: 30,
};

const h2 = {
  color: colors.tundora,
  fontSize: 23,
  fontWeight: '700',
};

const h3 = {
  color: colors.tundora,
  fontSize: 18,
  fontWeight: '700',
};

const styles = {
  h1,
  h2,
  h3,
};

export const getStylesForType = (type, style) =>
  StyleSheet.flatten([styles[type], style]);
export default function Heading({ children, type, style }) {
  return <Text style={getStylesForType(type, style)}>{children}</Text>;
}
