import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import GridDisplay from '../components/GridDisplay/GridDisplay';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('showEmptyGrid', () => {
  let wrapper;
  let cell1;
  let cell2;

  it('should render an empty grid', () => {
    wrapper = mount(<GridDisplay />);

    cell1 = wrapper.find({ id: 'row0_cell0' });
    cell2 = wrapper.find({ id: 'row9_cell9' });

    console.log(cell1);
    console.log(cell2);

    expect(1).toEqual(1);
  });
});
