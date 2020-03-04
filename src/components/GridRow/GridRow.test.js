import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GridRow from './GridRow';
import { setup, findByTestAttr } from '../../test-helper';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<GridDisplay />', () => {
  let wrapper;
  let gridRowComponent;
  let gridCellComponent;
  const empty = { value: '-', shipId: null };

  beforeEach(() => {
    let cells = [];
    for (let i = 0; i < 10; i++) {
      cells.push(empty);
    }

    wrapper = setup(GridRow, { id: 'r0', cells: cells });
    gridRowComponent = findByTestAttr(wrapper, 'component-grid-row');
    gridCellComponent = findByTestAttr(wrapper, 'component-grid-cell');
  });

  it('renders without error', () => {
    expect(gridRowComponent).toHaveLength(1);
  });

  it('renders 10 cells with a row by default', () => {
    expect(gridCellComponent).toHaveLength(10);
  });

  it('passes cell coordinate as a prop to each cell', () => {
    for (let i = 0; i < 10; i++) {
      expect(
        gridCellComponent.find({ id: `r0_c${i}` }).props().cellData
      ).toEqual(empty);
    }
  });
});
