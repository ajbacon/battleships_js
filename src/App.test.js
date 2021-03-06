import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { setup, findByTestAttr } from './test-helper';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
  let wrapper;
  let appComponent;

  beforeEach(() => {
    wrapper = setup(App);
    appComponent = findByTestAttr(wrapper, 'component-app');
  });

  it('renders without error', () => {
    expect(appComponent).toHaveLength(1);
  });
});
