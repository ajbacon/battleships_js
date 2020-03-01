import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GridDisplay from './GridDisplay';
import { setup, findByTestAttr } from '../../test-helper';
import Grid from '../../models/grid/grid';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<GridDisplay />', () => {
  let wrapper;
  let gridDisplayComponent;
  let testGridModel;

  beforeEach(() => {
    testGridModel = new Grid();
    wrapper = setup(GridDisplay, { model: testGridModel });
    gridDisplayComponent = findByTestAttr(wrapper, 'component-grid-display');
  });

  it('renders without error', () => {
    expect(gridDisplayComponent).toHaveLength(1);
  });
});
