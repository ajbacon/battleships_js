import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GridDisplay from '../components/GridDisplay/GridDisplay';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('placingShips', () => {
  let inputCell;
  let wrapper;

  describe('placing a single ship', () => {
    it('should be able to place a single, horizontal, ship of length 4 at location [0,0]', () => {
      wrapper = mount(<GridDisplay />);

      inputCell = wrapper.find({ id: 'row0_cell0' });
      inputCell.simulate('click');

      const cell1 = wrapper.find({ id: 'row0_cell0' });
      const cell2 = wrapper.find({ id: 'row0_cell1' });
      const cell3 = wrapper.find({ id: 'row0_cell2' });
      const cell4 = wrapper.find({ id: 'row0_cell3' });

      expect(cell1.props().cellData.value).toEqual('s');
      expect(cell2.props().cellData.value).toEqual('s');
      expect(cell3.props().cellData.value).toEqual('s');
      expect(cell4.props().cellData.value).toEqual('s');
    });

    it('should be able to place a single, vertical, ship of length 4 at location [0,0]', () => {
      wrapper = mount(<GridDisplay />);

      let orientationBtn = wrapper.find({ 'data-test': 'orientation-btn' });
      orientationBtn.simulate('click');
      inputCell = wrapper.find({ id: 'row0_cell0' });
      inputCell.simulate('click');

      const cell1 = wrapper.find({ id: 'row0_cell0' });
      const cell2 = wrapper.find({ id: 'row1_cell0' });
      const cell3 = wrapper.find({ id: 'row2_cell0' });
      const cell4 = wrapper.find({ id: 'row3_cell0' });

      expect(cell1.props().cellData.value).toEqual('s');
      expect(cell2.props().cellData.value).toEqual('s');
      expect(cell3.props().cellData.value).toEqual('s');
      expect(cell4.props().cellData.value).toEqual('s');
    });
  });
});
