import * as selectors from './Weight.selectors';

describe('Weight selectors', () => {
  describe('getSelectedLbs', () => {
    it('should subtract the bar from the weight', () => {
      const state = {
        weight: {
          selectedLb: 225,
        },
      };

      expect(selectors.getSelectedLbs(state)).toEqual(225);
    });
  });

  describe('getPlateWeightsLb', () => {
    it('should subtract the bar from the weight', () => {
      const state = {
        weight: {
          selectedLb: 225,
        },
      };

      expect(selectors.getPlateWeightsLb(state)).toEqual(180);
    });
  });

  describe('getPlateWeightsKg', () => {
    it('should subtract the bar, and convert to kg', () => {
      const state = {
        weight: {
          selectedLb: 225,
        },
      };

      expect(selectors.getPlateWeightsKg(state)).toEqual(82);
    });
  });

  describe('toPlatesKg', () => {
    it('should correctly identify the number of plates needed for the selected weight', () => {
      const state = {
        weight: {
          plates: {
            kg: [25, 20, 15, 10, 5, 2.5, 2, 1, 0.5],
          },
          selectedLb: 225,
        },
      };

      //82 kg
      expect(selectors.toPlatesKg(state)).toEqual({
        '1': 2,
        '15': 2,
        '25': 2,
      });
    });

    it('should handle a small amount of weight', () => {
      const state = {
        weight: {
          plates: {
            kg: [25, 20, 15, 10, 5, 2.5, 2, 1, 0.5],
          },
          selectedLb: 95,
        },
      };

      //24 kg
      expect(selectors.toPlatesKg(state)).toEqual({
        '0.5': 2,
        '1': 2,
        '10': 2,
      });
    });

    it('should only return plates that are available from the list', () => {
      const state = {
        weight: {
          plates: {
            kg: [15, 10, 5, 2.5, 2, 1, 0.5],
          },
          selectedLb: 225,
        },
      };

      //82 kg
      expect(selectors.toPlatesKg(state)).toEqual({
        '15': 4,
        '10': 2,
        '1': 2,
      });
    });
  });
});
