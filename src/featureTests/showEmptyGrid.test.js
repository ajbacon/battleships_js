import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
import Game from '../components/Game/Game';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

describe('showEmptyGrid', () => {
  let wrapper;
  let p1_cell1;
  let p1_cell2;
  let comp_cell1;
  let comp_cell2;
  const empty = { value: '-', shipId: null };

  it('should render an empty grid for the player and the computer', () => {
    wrapper = mount(<Game />);
    p1_cell1 = wrapper.find({ id: 'p1_r0_c0' });
    p1_cell2 = wrapper.find({ id: 'p1_r9_c9' });
    comp_cell1 = wrapper.find({ id: 'comp_r0_c0' });
    comp_cell2 = wrapper.find({ id: 'comp_r9_c9' });

    expect(p1_cell1).toHaveLength(1);
    expect(p1_cell2).toHaveLength(1);
    expect(comp_cell1).toHaveLength(1);
    expect(comp_cell2).toHaveLength(1);
  });

  it('should render an empty grid with cell object passed as props', () => {
    wrapper = mount(<Game />);
    p1_cell1 = wrapper.find({ id: 'p1_r0_c0' });
    p1_cell2 = wrapper.find({ id: 'p1_r9_c9' });
    comp_cell1 = wrapper.find({ id: 'comp_r0_c0' });
    comp_cell2 = wrapper.find({ id: 'comp_r9_c9' });

    expect(p1_cell1.props().cellData).toEqual(empty);
    expect(p1_cell2.props().cellData).toEqual(empty);
    expect(comp_cell1.props().cellData).toEqual(empty);
    expect(comp_cell2.props().cellData).toEqual(empty);
  });
});
