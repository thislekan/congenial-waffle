import { BaseSyntheticEvent } from "react";
import { SliceState, SliceContent } from "../app/interface";

export interface SliceComponentProps extends SliceState {
  componentIndex: number;
  removeSliceFunc: (value: number) => () => void;
  updateSliceFunc: (val: number, obj: SliceContent) => void;
}

export interface SliceComponentErrors {
  error1: string;
  error2: string;
  error3?: string;
}

export interface HooksInterface {
  sliceContent: SliceContent;
  updateSliceFunc: (val: number, obj: SliceContent) => void;
  componentIndex: number;
}

export interface HooksReturnsInterface {
  handleChange: (e: BaseSyntheticEvent) => void;
  field1: string;
  field2: string | number;
  field3?: string;
  inputErrors: SliceComponentErrors | null;
}
