import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getDisplayLbs,
  getDisplayKg,
  toPlatesListKg,
} from '../../modules/Weight/Weight.selectors';

import colors from '../../utils/colors';
import Heading from '../Heading/';

const selectors = createStructuredSelector({
  weightLb: getDisplayLbs,
  weightKg: getDisplayKg,
});

const style = StyleSheet.create({
  totalContainer: {
    // backgroundColor: colors.primary,
    // '#257ADE',
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 35,
    paddingTop: 35,
    borderRadius: 30,
  },
});

function WeightDisplay(props) {
  return (
    <View style={style.totalContainer}>
      <Heading
        type="h1"
        style={{
          fontSize: 50,
          paddingTop: 0,
          textAlign: 'center',
          color: colors.white,
          fontWeight: '800',
          // color: '#000',
        }}
      >
        {props.weightKg}
      </Heading>
      <Heading
        type="h2"
        style={{
          textAlign: 'center',
          color: colors.white,
          fontWeight: '800',
          // color: '#000',
        }}
      >
        {props.weightLb}
      </Heading>
    </View>
  );
}

export default connect(
  selectors,
  null,
)(WeightDisplay);
