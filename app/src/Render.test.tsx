import { render, screen } from "@testing-library/react";
import { Render } from "./Render";

describe("Rendering", () => {
  it("全ての要素がレンダリングされているか", () => {
    render(<Render />);
    //screen.debug();
    screen.debug(screen.getByRole("heading"));
  });
});
