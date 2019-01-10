import { createSelector } from 'reselect';
import R from 'ramda';
const BAR_KG = 20;
const KG_Conversion = 2.205;

const getWeightProp = R.prop('weight');
const getSelectedLbsProp = R.prop('selectedLb');
const getPlatesProp = R.prop('plates');
const getLb = R.prop('lb');
const getKg = R.prop('kg');

function toPlates(totalWeight, plateList) {
  if (totalWeight <= 0) {
    return {};
  }

  let weight = totalWeight;

  const platesToUse = plateList.reduce((platesObj, plate) => {
    const bothSides = plate * 2;
    const numPlates = Math.floor(weight / bothSides);
    if (numPlates) {
      platesObj[plate] = numPlates;
      weight = weight % bothSides;
    }
    return platesObj;
  }, {});

  return R.mergeAll(platesToUse);
}

const subtractBar = weightLb => weightLb - BAR_KG;
const toKg = weightLb => Math.round(weightLb / KG_Conversion);

export const getSelectedLbs = createSelector(getWeightProp, getSelectedLbsProp);
export const getSelectedKg = createSelector(getSelectedLbs, toKg);

export const getDisplayLbs = createSelector(
  getSelectedLbs,
  weight => `${weight} Lb`,
);
export const getDisplayKg = createSelector(
  getSelectedKg,
  weight => `${weight} Kg`,
);

export const getPlateWeightsKg = createSelector(getSelectedKg, subtractBar);

export const getPlates = createSelector(getWeightProp, getPlatesProp);
export const getPlatesLb = createSelector(getPlates, getLb);
export const getPlatesKg = createSelector(getPlates, getKg);

export const toPlatesKg = createSelector(
  getPlateWeightsKg,
  getPlatesKg,
  toPlates,
);

export const toPlatesListKg = createSelector(toPlatesKg, plates => {
  const unsortedWeights = R.keys(plates);
  const sortDesc = R.sort((a, b) => b - a);

  const weights = sortDesc(unsortedWeights);
  const totalPlates = weights.map(weight => {
    const countList = R.range(0, Number(plates[weight]));
    return countList.map(() => weight);
  });

  return R.flatten(totalPlates);
});

export const getAllPlatesKg = createSelector(toPlatesListKg, plates => {
  return plates.map(plate => ({
    id: plate,
    weight: Number(plate),
    label: `${plate} Kg`,
  }));
});

export const getAllPlatesKgByWeight = createSelector(toPlatesKg, plates => {
  const keys = R.keys(plates);
  const sortDesc = R.sort((a, b) => b - a);
  return R.map(key => ({
    id: key,
    weight: Number(key),
    label: `${key} Kg`,
    count: plates[key],
  }))(sortDesc(keys));
});
