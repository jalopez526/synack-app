import Results from "../../Components/Results";
import { render } from "@testing-library/react";

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
  
  it("should render items from Results", () => {
    const { getByTestId } = render(<Results data={data} />);
    expect(getByTestId("result")).toBeInTheDocument();
  });

  it("should render no items from Results", () => {
    const { queryByTestId } = render(<Results />);
    expect(queryByTestId("result")).toBeFalsy();
  });
});
