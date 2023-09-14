import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";
import "@testing-library/jest-dom";

describe("useEffect rendering", () => {
  it("非同期関数実行後にレンダリング処理", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/OK/)).toBeNull();
    expect(await screen.findByText(/OK/)).toBeInTheDocument();
  });
});
