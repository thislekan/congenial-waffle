export interface SliceContent {
  field1: string;
  field2: string | number;
  field3?: string;
}

export interface SliceState {
  sliceType: string;
  sliceContent: SliceContent;
}
