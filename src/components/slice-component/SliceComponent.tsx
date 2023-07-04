import { memo } from "react";
import { SliceComponentProps } from "./interface";
import { useSliceState } from "./useSliceState";
import { PLACEHOLDERS_LIST } from "../../helpers/constants";

/**
 * @description SliceComponent focuses on the JSX while the logic and state is managed in the useSliceState hook. This was done to streamline the size of the component.
 *
 * @param {SliceComponentProps}
 * @returns {JSX.Element}
 */
const SliceComponent = ({
  sliceContent,
  sliceType,
  componentIndex,
  removeSliceFunc,
  updateSliceFunc,
}: SliceComponentProps): JSX.Element => {
  const { field1, field2, field3, handleChange, inputErrors } = useSliceState({
    sliceContent,
    updateSliceFunc,
    componentIndex,
  });

  // position of slice in the constants used for placeholder values
  const sliceTypePosition = ((): number => {
    switch (sliceType) {
      case "price":
        return 0;
      case "article":
        return 1;
      case "hero":
        return 2;
      default:
        return 1;
    }
  })();

  return (
    <div
      className={`slice-content${
        sliceType === "article" ? " slice-content--addHeight" : ""
      }`}
    >
      <div className="slice-content__wrapper">
        <div className="slice-content__wrapper__top-div">
          <h5>
            <span>{sliceType}</span> slice
          </h5>
          <button onClick={removeSliceFunc(componentIndex)}>
            Remove Slice
          </button>
        </div>
        <div className="slice-content__wrapper__input-div">
          <div className="input-wrapper">
            <input
              type="text"
              name="field1"
              onChange={handleChange}
              value={field1}
              aria-label="field1"
              placeholder={PLACEHOLDERS_LIST[sliceTypePosition]?.field1}
            />
            {inputErrors?.error1 && (
              <span className="error">{inputErrors.error1}</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type={sliceType === "price" ? "number" : "text"}
              name="field2"
              onChange={handleChange}
              value={field2}
              className="second-input"
              aria-label="field2"
              placeholder={PLACEHOLDERS_LIST[sliceTypePosition]?.field2}
            />
            {inputErrors?.error2 && (
              <span className="error">{inputErrors.error2}</span>
            )}
          </div>
          {sliceType === "article" && (
            <div className="input-wrapper">
              <input
                type="color"
                className="color"
                onChange={handleChange}
                name="field3"
                value={field3 || "#FF0000"}
                aria-label="field3"
              />
              {inputErrors?.error3 && (
                <span className="error">{inputErrors.error3}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// i prefer exporting this way because when debugging, I can easily find sliceComponent in the devTools as opposed to it being named Anonymous if I export it like so: export const SliceComponent = memo(() => { return <div />})
export const MemoizedSliceComponent = memo(SliceComponent);
