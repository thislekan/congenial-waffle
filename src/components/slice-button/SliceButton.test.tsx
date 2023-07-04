import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoizedSliceButton } from "./SliceButton";
import { vi } from "vitest";

describe("<MemoizedSliceButton />", () => {
  test("Confirming Slice Button works", async () => {
    const mockFn = vi.fn();
    render(<MemoizedSliceButton name="article" addSliceFunc={mockFn} />);

    const articleText = screen.getByText("article");
    expect(articleText).toBeVisible();
    await userEvent.click(articleText);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
