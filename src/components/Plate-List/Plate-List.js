import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getAllPlatesKg,
  getAllPlatesKgByWeight,
} from '../../modules/Weight/Weight.selectors';
import R from 'ramda';
const bar = require('../../assets/empty-bar-dark.png');
import BarPlate from '../BarPlate/';
import Heading from '../Heading/';
import Plate from '../Plate/';
import colors from '../../utils/colors';
import WeightDisplay from '../Weight-Display/';

const selectors = createStructuredSelector({
  allPlatesKg: getAllPlatesKg,
  platesKgByType: getAllPlatesKgByWeight,
});

const style = {
  platelist: {
    marginBottom: 40,
    // borderWidth: 1,
    // backgroundColor: '#e9f3fe',
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    borderRadius: 30,
    // borderColor: 'white',
  },
};

function renderItem({ item }) {
  return <Plate {...item} />;
}

function PlateList(props) {
  return (
    <FlatList
      style={style.platelist}
      data={props.platesKgByType}
      renderItem={renderItem}
    />
  );
}

export default connect(
  selectors,
  null,
)(PlateList);
