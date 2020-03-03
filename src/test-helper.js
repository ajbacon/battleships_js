import React from 'react';
import { shallow } from 'enzyme';

export const setup = (Component, props = {}, state = null) => {
  const wrapper = shallow(<Component {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

export const findByTestAttr = (wrapper, testAttr) =>
  wrapper.find(`[data-test='${testAttr}']`);

export const emptyGrid = () => {
  let emptyGrid = [];
  for (let i = 0; i < 10; i++) {
    let newRow = [];
    for (let j = 0; j < 10; j++) {
      newRow.push({ value: '-', shipId: null });
    }
    emptyGrid.push(newRow);
  }

  return emptyGrid;

  // return Array(10).fill(Array(10).fill({value: "-", shipId: null}));
};
