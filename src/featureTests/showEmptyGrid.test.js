import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import GridPlayer from '../components/GridPlayer/GridPlayer';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('showEmptyGrid', () => {
  let wrapper;
  let cell1;
  let cell2;
  const empty = { value: '-', shipId: null };

  it('should render an empty grid', () => {
    wrapper = mount(<GridPlayer />);
    // console.log(wrapper.debug());

    cell1 = wrapper.find({ id: 'r0_c0' });
    cell2 = wrapper.find({ id: 'r9_c9' });

    expect(cell1).toHaveLength(1);
    expect(cell2).toHaveLength(1);
  });

  it('should render an empty grid with cell object passed as props', () => {
    wrapper = mount(<GridPlayer />);
    // console.log(wrapper.debug());

    cell1 = wrapper.find({ id: 'r0_c0' });
    cell2 = wrapper.find({ id: 'r9_c9' });

    console.log(cell1.props().cellData);

    expect(cell1).toHaveLength(1);
    expect(cell2).toHaveLength(1);
    expect(cell1.props().cellData).toEqual(empty);
    expect(cell2.props().cellData).toEqual(empty);
  });
});
