// @vitest-environment jsdom

import { describe, expect, test, beforeEach, vi } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  test("should check that the App is visible", () => {
    render(<App />);

    expect(screen.getByText("Available slices")).toBeVisible();
  });

  test("should check app functionalities", async () => {
    const { unmount } = render(<App />);
    const priceBtn = screen.getByRole("button", { name: /article button/i });

    expect(priceBtn).toBeVisible();
    await userEvent.click(priceBtn);

    const field1 = screen.getByRole("textbox", {
      name: /field1/i,
    }) as HTMLInputElement;
    const field2 = screen.getByRole("textbox", {
      name: /field2/i,
    }) as HTMLInputElement;

    await act(async () => {
      await waitFor(async () => {
        await userEvent.type(field1, "melon ausk");
        await userEvent.type(field2, "zuck mark");
      });
    });

    expect(field1.value).toStrictEqual("melon ausk");
    expect(field2.value).toStrictEqual("zuck mark");

    unmount();
    render(<App />);

    expect(field1.value).toStrictEqual("melon ausk");
    expect(field2.value).toStrictEqual("zuck mark");
  });
});
