import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";

afterEach(() => cleanup());

describe("Rendering", () => {
  it("要素が全てレンダリングされているか", () => {
    render(<RenderInput outputConsole={console.log} />);
    expect(screen.getAllByRole("button")).toBeTruthy();
    expect(screen.getByPlaceholderText("enter")).toBeTruthy(); //placeホルダー
  });
});

describe("Input form onChnage event", () => {
  it("入力値テスト", async () => {
    render(<RenderInput outputConsole={console.log} />);
    const inputValue = screen.getByPlaceholderText("enter") as HTMLInputElement; //型キャストしないとvalueで警告
    userEvent.type(inputValue, "test");
    await screen.findByDisplayValue("test");
    expect(inputValue.value).toBe("test");
  });
});

describe("Console button conditionally triggered", () => {
  it("アウトプットファンクションをトリガーにしない", () => {
    const outputConsole = jest.fn(); //jestのダミー関数
    render(<RenderInput outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole("button"));
    expect(outputConsole).not.toHaveBeenCalled;
  });
  it("アウトプットファンクションをトリガーにする", async () => {
    const outputConsole = jest.fn();
    render(<RenderInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText("enter") as HTMLInputElement; //型キャストしないとvalueで警告
    await userEvent.type(inputValue, "test");
    await userEvent.click(screen.getByRole("button"));
    expect(outputConsole).toHaveBeenCalledTimes(1); //34行目のダミー関数が1回だけ呼ばれる
  });
});
