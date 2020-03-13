import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GridPlayer from './GridPlayer';
import { setup, findByTestAttr } from '../../test-helper';
import Grid from '../../models/grid/grid';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<GridPlayer />', () => {
  let wrapper;
  let gridPlayerComponent;
  let testGridModel;

  beforeEach(() => {
    testGridModel = new Grid();
    wrapper = setup(GridPlayer, { model: testGridModel });
    gridPlayerComponent = findByTestAttr(wrapper, 'component-grid-player');
  });

  it('renders without error', () => {
    expect(gridPlayerComponent).toHaveLength(1);
  });
});
