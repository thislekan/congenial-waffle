import { memo } from "react";
import { SliceButtonProps } from "./interface";

/**
 * @param {SliceButtonProps}
 * @returns {JSX.Element}
 */
const SliceButton = ({ name, addSliceFunc }: SliceButtonProps): JSX.Element => {
  return (
    <div
      className="create-slice"
      onClick={addSliceFunc(name)}
      role="button"
      aria-label={`${name} button`}
    >
      <div className={`create-slice__btn create-slice__btn--${name}`}>
        <div className="create-slice__btn__icon-div">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${name}-svg`}
          >
            <circle cx="8" cy="8" r="8" />
            <path
              d="M13.0905 8.72723H8.72687V13.0909H7.27233V8.72723H2.90869V7.27269H7.27233V2.90905H8.72687V7.27269H13.0905V8.72723Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <p className="create-slice__name">{name}</p>
    </div>
  );
};

// i prefer to export this way because when debugging, I can easily find sliceComponent in the devTools as opposed to it being named Anonymous if I export it like so: export const SliceComponent = memo(() => { return <div />})
export const MemoizedSliceButton = memo(SliceButton);
