import Results from "../Components/Results";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';

describe("Testing Results component", () => {
  const data = [
    {
      title: "Google",
      link: "www.google.com",
      snippet: "Google Inc.",
    },
    {
      title: "Bing",
      link: "www.bing.com",
      snippet: "Bing Inc.",
    },
  ];

  it('renders correctly', () => {
    const tree = renderer
      .create(<Results data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("should render items from Results", () => {
    const { getByTestId } = render(<Results data={data} />);
    expect(getByTestId("result")).toBeInTheDocument();
  });

  it("should render no items from Results", () => {
    const { queryByTestId } = render(<Results />);
    expect(queryByTestId("result")).toBeFalsy();
  });
});
