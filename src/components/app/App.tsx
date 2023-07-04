import { useState } from "react";
import { MemoizedSliceButton } from "../slice-button/SliceButton";
import { MemoizedSliceComponent } from "../slice-component/SliceComponent";
import { SliceState, SliceContent } from "./interface";
import {
  changeSliceFunc,
  persistSliceFunc,
  restorePersistedSliceFunc,
} from "../../helpers/sliceHelpers";
import { AVAILABLE_SLICE_TYPE } from "../../helpers/constants";

//TODO: Look at readme vs current implementation vs design
//TODO: create checklist and check in accordance to completion
//TODO: Ask if method of persisteence has any sway over decision making process

function App(): JSX.Element {
  const [sliceList, setSliceList] = useState<SliceState[]>(() => {
    return restorePersistedSliceFunc();
  });

  const addNewSlice = (name: string) => () => {
    const fieldObj = { field1: "", field2: "" };
    const newSlice: SliceState = {
      sliceType: name,
      sliceContent: name === "article" ? { ...fieldObj, field3: "" } : fieldObj,
    };
    const newSliceList = sliceList.concat(newSlice);
    setSliceList(newSliceList);
    persistSliceFunc(newSliceList);
  };

  const removeSlice = (index: number) => () => {
    const newSliceList = changeSliceFunc(sliceList, index);
    setSliceList(newSliceList);
    persistSliceFunc(newSliceList);
  };

  const updateSlice = (index: number, content: SliceContent) => {
    const newSlice: SliceState = {
      sliceType: sliceList[index]?.sliceType ?? "",
      sliceContent: content,
    };
    const newSliceList = changeSliceFunc(sliceList, index, newSlice);
    setSliceList(newSliceList);
    persistSliceFunc(newSliceList);
  };

  return (
    <div className="home">
      {sliceList.map(({ sliceContent, sliceType }, index) => (
        <MemoizedSliceComponent
          sliceContent={sliceContent}
          sliceType={sliceType}
          key={`${sliceType + index}`}
          componentIndex={index}
          removeSliceFunc={removeSlice}
          updateSliceFunc={updateSlice}
        />
      ))}
      <div className="home__btn-section">
        <h6>Available slices</h6>
        <div className="home__btn-section__btns">
          {AVAILABLE_SLICE_TYPE.map((name: string, index) => (
            <MemoizedSliceButton
              name={name}
              addSliceFunc={addNewSlice}
              key={name + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
