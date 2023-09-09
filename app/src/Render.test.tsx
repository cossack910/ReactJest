import { render, screen } from "@testing-library/react";
import { Render } from "./Render";

describe("Rendering", () => {
  it("全ての要素がレンダリングされているか", () => {
    render(<Render />);
    expect(screen.getByRole("heading")).toBeTruthy(); //要素が存在するか
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy(); //１つ目のボタン
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy(); //文字列が存在するか
    expect(screen.getByText("@React")).toBeTruthy();
    expect(screen.queryByText("neko")).toBeNull(); //存在しないテキスト判定
    expect(screen.getByTestId("test20230909")).toBeTruthy();
  });
});
