import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
  describe('snapshot', () => {
    it('renders a disabled button', () => {
      const tree = renderer
        .create(<Button disabled={true}>Text</Button>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders a regular button', () => {
      const tree = renderer.create(<Button>Text</Button>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
