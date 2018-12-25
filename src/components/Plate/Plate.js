import React from 'react';
import { Text, View, Image } from 'react-native';
import colors from '../../utils/colors';

const plate25 = require('../../assets/plate-25.png');
const plate20 = require('../../assets/plate-20.png');
const plate15 = require('../../assets/plate-15.png');
const plate10 = require('../../assets/plate-10.png');
const plate5 = require('../../assets/plate-5.png');

const style = {
  container: {
    marginLeft: 20,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    // flex: 0,
    // width: '100%',
    // borderWidth: 1,
    backgroundColor: colors.white,
    // '#E9FEF3',
    borderRadius: 30,
  },
  plateContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
    // marginRight: 20,
  },
  weight: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 20,
    color: '#257ADE',
  },
  count: {
    // fontSize: 40,
    //
    fontSize: 20,
    color: colors.primary,
  },
  largePlate: { width: 80, height: 80 },
  medPlate: { width: 80, height: 80 },
  smallPlate: { width: 70, height: 70 },
};

const getIconForPlate = id => {
  switch (id) {
    case '2.5':
    case '25':
      return plate25;
    case '2':
    case '20':
      return plate20;
    case '1.5':
    case '15':
      return plate15;
    case '1':
    case '10':
      return plate10;
    case '0.5':
    case '5':
      return plate5;
    default:
      return plate25;
  }
};

const getStyleForPlate = weight => {
  if (weight) {
    return style.largePlate;
  } else if (weight === 5) {
    return style.medPlate;
  } else {
    return style.smallPlate;
  }
};

export default function Plate(props) {
  const plateIcon = getIconForPlate(props.id);
  return (
    <View style={style.container}>
      <View style={style.plateContainer}>
        <Image style={style.largePlate} source={plateIcon} />
        <Text style={style.weight}>
          {props.label} x {props.count}
        </Text>
      </View>
    </View>
  );
}
