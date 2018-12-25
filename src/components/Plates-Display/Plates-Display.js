import React from 'react';
import { View, Text, Image } from 'react-native';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getAllPlatesKg,
  getAllPlatesKgByWeight,
} from '../../modules/Weight/Weight.selectors';
import R from 'ramda';
const bar = require('../../assets/empty-2.png');
import BarPlate from '../BarPlate/';
import Heading from '../Heading/';
import Plate from '../Plate/';
import PlateList from '../Plate-List/';
import colors from '../../utils/colors';
import WeightDisplay from '../Weight-Display/';
const selectors = createStructuredSelector({
  allPlatesKg: getAllPlatesKg,
  platesKgByType: getAllPlatesKgByWeight,
});

const plateStyles = {
  borderWidth: 2,
  borderColor: 'black',
  backgroundColor: '#B85B5B',
  padding: 3,
  paddingTop: 30,
  paddingBottom: 30,
  borderRadius: 10,
  width: 3,
  top: 192,
  right: 184,
  position: 'absolute',
};

const style = {
  container: { flex: 1, backgroundColor: colors.primary, width: '100%' },
  plates: {
    margin: 40,
  },
  bar: {
    borderWidth: 5,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: 'black',
    padding: 10,
  },
  barEndLeft: {
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: 'black',
    padding: 10,
    width: 5,
  },
  plates: {
    margin: 40,
  },
};

const mapWeightToColor = plate => {
  switch (plate.id) {
    case '2.5':
    case '25':
      return colors.red;
    case '2':
    case '20':
      return colors.blue;
    case '1.5':
    case '15':
      return colors.yellow;
    case '1':
    case '10':
      return colors.green;
    case '0.5':
    case '5':
      return colors.white;
    default:
      return colors.white;
  }
};

const generatePlate = (plate, i) => {
  if (plate.weight >= 10) {
    return generateBigPlate(plate, i);
  } else if (plate.weight === 5) {
    return generateMedPlate(plate, i);
  } else {
    return generateSmallPlate(plate, i);
  }
};

const generateBigPlate = (plate, i) => {
  const plateWidth = plateStyles.right - (10 * i + 1);
  const color = mapWeightToColor(plate);

  return (
    <View
      style={{ ...plateStyles, right: plateWidth, backgroundColor: color }}
    />
  );
};

const generateMedPlate = (plate, i) => {
  const plateWidth = plateStyles.right - (10 * i + 1);
  const color = mapWeightToColor(plate);

  return (
    <View
      style={{
        ...plateStyles,
        paddingTop: 25,
        paddingBottom: 25,
        top: plateStyles.top + 5,
        right: plateWidth,
        backgroundColor: color,
      }}
    />
  );
};

const generateSmallPlate = (plate, i) => {
  const plateWidth = plateStyles.right - (10 * i + 1);
  const color = mapWeightToColor(plate);

  return (
    <View
      style={{
        ...plateStyles,
        paddingTop: 15,
        paddingBottom: 15,
        top: plateStyles.top + 15,
        right: plateWidth,
        backgroundColor: color,
      }}
    />
  );
};

function PlatesDisplay(props) {
  const platesOnBar = props.allPlatesKg.map(generatePlate);
  const plateBreakdown = props.platesKgByType.map(plate => (
    <Plate {...plate} />
  ));
  return (
    <View style={style.container}>
      <WeightDisplay />

      <Image
        style={{ marginTop: 20, width: 280, height: 100, left: 0, top: 0 }}
        source={bar}
      />
      {platesOnBar}
      <PlateList />
    </View>
  );
}

export default connect(
  selectors,
  null,
)(PlatesDisplay);
