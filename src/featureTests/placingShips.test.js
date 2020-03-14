import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Game from '../components/Game/Game';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('placingShips', () => {
  let inputCell;
  let wrapper;
  let orientationBtn;
  let ship5Btn;
  let ship4Btn;
  let ship3Btn;
  let ship2Btn;

  beforeEach(() => {
    wrapper = mount(<Game />);
    orientationBtn = wrapper.find({ 'data-test': 'orientation-btn' });
    ship5Btn = wrapper.find({ 'data-test': 'ship5-btn' });
    ship4Btn = wrapper.find({ 'data-test': 'ship4-btn' });
    ship3Btn = wrapper.find({ 'data-test': 'ship3-btn' });
    ship2Btn = wrapper.find({ 'data-test': 'ship2-btn' });
  });

  describe('placing a single ship', () => {
    it('should be able to place a single, horizontal, ship of length 4 at location [0,0]', () => {
      ship4Btn.simulate('click');
      inputCell = wrapper.find({ id: 'p1_r0_c0' });
      inputCell.simulate('click');

      const cell1 = wrapper.find({ id: 'p1_r0_c0' });
      const cell2 = wrapper.find({ id: 'p1_r0_c1' });
      const cell3 = wrapper.find({ id: 'p1_r0_c2' });
      const cell4 = wrapper.find({ id: 'p1_r0_c3' });

      expect(cell1.props().cellData.value).toEqual('s');
      expect(cell2.props().cellData.value).toEqual('s');
      expect(cell3.props().cellData.value).toEqual('s');
      expect(cell4.props().cellData.value).toEqual('s');
    });

    it('should be able to place a single, vertical, ship of length 4 at location [0,0]', () => {
      ship4Btn.simulate('click');
      orientationBtn.simulate('click');
      inputCell = wrapper.find({ id: 'p1_r0_c0' });
      inputCell.simulate('click');

      const cell1 = wrapper.find({ id: 'p1_r0_c0' });
      const cell2 = wrapper.find({ id: 'p1_r1_c0' });
      const cell3 = wrapper.find({ id: 'p1_r2_c0' });
      const cell4 = wrapper.find({ id: 'p1_r3_c0' });

      expect(cell1.props().cellData.value).toEqual('s');
      expect(cell2.props().cellData.value).toEqual('s');
      expect(cell3.props().cellData.value).toEqual('s');
      expect(cell4.props().cellData.value).toEqual('s');
    });
  });

  describe('placing ships of different lengths', () => {
    it('should place a ship of lengths 5,4,3,2', () => {
      ship5Btn.simulate('click');
      inputCell = wrapper.find({ id: 'p1_r0_c0' });
      inputCell.simulate('click');

      ship4Btn.simulate('click');
      inputCell = wrapper.find({ id: 'p1_r1_c0' });
      inputCell.simulate('click');

      orientationBtn.simulate('click');

      ship3Btn.simulate('click');
      inputCell = wrapper.find({ id: 'p1_r0_c6' });
      inputCell.simulate('click');

      ship2Btn.simulate('click');
      inputCell = wrapper.find({ id: 'p1_r0_c7' });
      inputCell.simulate('click');

      expect(wrapper.find({ id: 'p1_r0_c0' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r0_c1' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r0_c2' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r0_c3' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r0_c4' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r0_c5' }).props().cellData.value).toEqual(
        '-'
      );

      expect(wrapper.find({ id: 'p1_r1_c0' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r1_c1' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r1_c2' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r1_c3' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r1_c4' }).props().cellData.value).toEqual(
        '-'
      );

      expect(wrapper.find({ id: 'p1_r0_c6' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r1_c6' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r2_c6' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r3_c6' }).props().cellData.value).toEqual(
        '-'
      );

      expect(wrapper.find({ id: 'p1_r0_c7' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r1_c7' }).props().cellData.value).toEqual(
        's'
      );
      expect(wrapper.find({ id: 'p1_r2_c7' }).props().cellData.value).toEqual(
        '-'
      );
    });
  });
});
