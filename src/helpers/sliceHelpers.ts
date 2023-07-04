import { SliceState } from "../components/app/interface";

export const changeSliceFunc = (
  sliceList: SliceState[],
  index: number,
  newSlice?: SliceState
): SliceState[] => {
  // toSpliced throws an error, so spreading is the alternative
  const newSliceList = [...sliceList];
  newSlice
    ? newSliceList.splice(index, 1, newSlice)
    : newSliceList.splice(index, 1);
  return newSliceList;
};

export const persistSliceFunc = (sliceList: SliceState[]) => {
  const sliceToBePersisted = JSON.stringify(sliceList);
  localStorage.setItem("sliceList", sliceToBePersisted);
};

export const restorePersistedSliceFunc = (): SliceState[] => {
  const sliceList = localStorage.getItem("sliceList") ?? "[]";
  const sliceToBePersisted: SliceState[] = JSON.parse(sliceList);

  return sliceToBePersisted;
};
