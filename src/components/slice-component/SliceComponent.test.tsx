import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { MemoizedSliceComponent } from "./SliceComponent";

describe("<MemoizedSliceButton />", () => {
  test("Testing user actions on MemoizedSliceButton with props", async () => {
    const removeSliceMockFn = vi.fn();
    const updateSliceMockFn = vi.fn();

    render(
      <MemoizedSliceComponent
        sliceType="article"
        sliceContent={{
          field1: "New World Order",
          field2: "The beginning of a new order",
          field3: "#ABC345",
        }}
        componentIndex={1}
        removeSliceFunc={removeSliceMockFn}
        updateSliceFunc={updateSliceMockFn}
      />
    );

    const titleField = screen.getByDisplayValue("New World Order");
    const subTitleField = screen.getByDisplayValue(
      "The beginning of a new order"
    );
    expect(titleField).toBeVisible();
    expect(subTitleField).toBeVisible();

    await userEvent.clear(titleField);
    await userEvent.clear(subTitleField);

    expect(titleField).toHaveValue("");
    expect(subTitleField).toHaveValue("");

    await userEvent.type(titleField, "Party in New York");
    await userEvent.type(subTitleField, "No more parties in LA");

    expect(titleField).toHaveValue("Party in New York");
    expect(subTitleField).toHaveValue("No more parties in LA");

    const removeSliceBtn = screen.getByText("Remove Slice");
    await userEvent.click(removeSliceBtn);

    expect(removeSliceMockFn).toHaveBeenCalled();

    await waitFor(() => {
      waitForElementToBeRemoved(titleField);
      waitForElementToBeRemoved(subTitleField);
    });
  });
  test("Testing for errors", async () => {
    const removeSliceMockFn = vi.fn();
    const updateSliceMockFn = vi.fn();

    render(
      <MemoizedSliceComponent
        sliceType="article"
        sliceContent={{
          field1: "",
          field2: "",
          field3: "#ABC345",
        }}
        componentIndex={1}
        removeSliceFunc={removeSliceMockFn}
        updateSliceFunc={updateSliceMockFn}
      />
    );

    const artiCleField1 = screen.getByRole("textbox", { name: /field1/i });
    await userEvent.type(artiCleField1, "  ");
    const errorSpan = screen.getByText(
      "The value provided for this field is invalid."
    );

    expect(errorSpan).toBeVisible();

    await userEvent.clear(artiCleField1);
    await userEvent.type(artiCleField1, "S");

    expect(errorSpan).not.toBeVisible();
  });
});
