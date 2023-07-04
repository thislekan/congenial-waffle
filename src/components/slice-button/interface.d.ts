export interface SliceButtonProps {
  name: string;
  addSliceFunc: (value: string) => () => void;
}
