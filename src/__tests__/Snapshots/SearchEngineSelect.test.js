import SearchEngineSelect from "../../Components/SearchEngine/SearchEngineSelect";
import renderer from 'react-test-renderer';

describe("Testing SearchSelect snapshot", () => {
  const onChange = jest.fn();

  it('renders correctly', () => {
    const tree = renderer
      .create(<SearchEngineSelect onChange={onChange} value="google" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
