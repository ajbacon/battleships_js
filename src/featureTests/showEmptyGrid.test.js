import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import GridDisplay from '../components/GridDisplay/GridDisplay';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('showEmptyGrid', () => {
  let wrapper;
  let cell1;
  let cell2;
  const empty = { value: '-', shipId: null };

  it('should render an empty grid', () => {
    wrapper = mount(<GridDisplay />);
    // console.log(wrapper.debug());

    cell1 = wrapper.find({ id: 'row0_cell0' });
    cell2 = wrapper.find({ id: 'row9_cell9' });

    expect(cell1).toHaveLength(1);
    expect(cell2).toHaveLength(1);
  });

  it('should render an empty grid with cell object passed as props', () => {
    wrapper = mount(<GridDisplay />);
    // console.log(wrapper.debug());

    cell1 = wrapper.find({ id: 'row0_cell0' });
    cell2 = wrapper.find({ id: 'row9_cell9' });

    console.log(cell1.props().cellData);

    expect(cell1).toHaveLength(1);
    expect(cell2).toHaveLength(1);
    expect(cell1.props().cellData).toEqual(empty);
    expect(cell2.props().cellData).toEqual(empty);
  });
});
