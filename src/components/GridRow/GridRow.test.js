import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GridRow from './GridRow';
import { setup, findByTestAttr } from '../../test-helper';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<GridDisplay />', () => {
  let wrapper;
  let gridRowComponent;
  let gridCellComponent;

  beforeEach(() => {
    wrapper = setup(GridRow, { id: 0 });
    gridRowComponent = findByTestAttr(wrapper, 'component-grid-row');
  });

  it('renders without error', () => {
    expect(gridRowComponent).toHaveLength(1);
  });

  it('renders 10 cells with a row by default', () => {
    console.log(wrapper.debug());
    gridCellComponent = findByTestAttr(wrapper, 'component-grid-cell');
    expect(gridCellComponent).toHaveLength(10);
  });
});
