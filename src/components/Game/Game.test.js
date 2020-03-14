import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Game from './Game';
import { setup, findByTestAttr } from '../../test-helper';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
  let wrapper;
  let gameComponent;

  beforeEach(() => {
    wrapper = setup(Game);
    gameComponent = findByTestAttr(wrapper, 'component-game');
  });

  it('renders without error', () => {
    expect(gameComponent).toHaveLength(1);
  });
});
