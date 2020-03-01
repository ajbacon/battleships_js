import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import GridRow from './GridRow';
import { setup, findByTestAttr } from '../../test-helper';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<GridDisplay />', () => {
  let wrapper;
  let gridRowComponent;

  beforeEach(() => {
    wrapper = setup(GridRow);
    gridRowComponent = findByTestAttr(wrapper, 'component-grid-row');
  });

  it('renders without error', () => {
    expect(gridRowComponent).toHaveLength(1);
  });
});
