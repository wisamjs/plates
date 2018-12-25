import { takeEvery } from 'redux-saga/effects';

import { SAVE_WEIGHT } from '../Weight/Weight.actions';
import { Navigation } from 'react-native-navigation';
import colors from '../../utils/colors';
export function* showDisplay() {
  yield Navigation.push('plates.main', {
    component: {
      name: 'plates.display',
      options: {
        topBar: {
          background: {
            color: 'transparent',
            translucent: true,
          },
          drawBehind: true,
          backButton: {
            color: colors.white,
          },
          title: {},
        },
      },
    },
  });
}

export function* saga() {
  yield takeEvery(SAVE_WEIGHT, showDisplay);
}
