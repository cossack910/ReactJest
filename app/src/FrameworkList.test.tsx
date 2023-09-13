import { render, screen, cleanup } from "@testing-library/react";
import FrameworkList from "./FrameworkList";
import "@testing-library/jest-dom";

afterEach(() => cleanup);

describe("Rendering the list with props", () => {
  it("プロップスに何も渡さん", () => {
    render(<FrameworkList />);
    expect(screen.getByText("No data!")).toBeInTheDocument();
  });

  it("プロップスにデータを渡す", () => {
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Vue dummy" },
      { id: 3, item: "Svelte dummy" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((element) => element.textContent);
    const dummyItems = dummyData.map((element) => element.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByAltText("No data!")).toBeNull();
  });
});
