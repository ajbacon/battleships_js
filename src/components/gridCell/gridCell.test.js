import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GridCell from './GridCell';
import { setup, findByTestAttr } from '../../test-helper';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<GridCell />', () => {
  let wrapper;
  let gridCellComponent;

  beforeEach(() => {
    wrapper = setup(GridCell, { cellData: { value: '-' }, onClick: jest.fn() });
    gridCellComponent = findByTestAttr(wrapper, 'component-grid-cell');
  });

  it('renders without error', () => {
    expect(gridCellComponent).toHaveLength(1);
  });
});
