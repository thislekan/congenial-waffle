import { BaseSyntheticEvent, useState, useEffect, useCallback } from "react";
import {
  SliceComponentErrors,
  HooksInterface,
  HooksReturnsInterface,
} from "./interface";
import { SliceContent } from "../app/interface";
import { validateInput } from "../../helpers/validator";
import { DONE_TYPING_INTERVAL } from "../../helpers/constants";

let inputChangeTimer: ReturnType<typeof setTimeout>;

/**
 * @param {HooksInterface}
 * @returns {HooksReturnsInterface}
 */
export const useSliceState = ({
  sliceContent,
  updateSliceFunc,
  componentIndex,
}: HooksInterface): HooksReturnsInterface => {
  const [doneTyping, setDoneTyping] = useState(false);
  const [{ field1, field2, field3 }, setContent] =
    useState<SliceContent>(sliceContent);
  const [inputErrors, setInputErrors] = useState<SliceComponentErrors | null>(
    null
  );

  const setOrClearError = (name: string, value: string) => {
    let objName: string;
    let errorObj = { error1: "", error2: "" };
    if (inputErrors) errorObj = { ...inputErrors };

    switch (name) {
      case "field1":
        objName = "error1";
        break;
      case "field2":
        objName = "error2";
        break;
      case "field3":
        objName = "error3";
        break;
      default:
        objName = "";
    }

    objName && setInputErrors({ ...errorObj, [objName]: value });
  };

  const verifyErrorsFunc = (e: BaseSyntheticEvent) => {
    const { name, value, type } = e.target;
    let err = validateInput(value, type) ?? "";

    if (name === "field2" && e.target.validity.badInput) {
      err = "Please provide a valid number for this field";
    }

    setOrClearError(name, err);
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    setDoneTyping(false);
    clearTimeout(inputChangeTimer);

    const { name, value } = e.target;
    verifyErrorsFunc(e);

    let initialState: SliceContent = { field1, field2 };
    if (field3) initialState = { ...initialState, field3 };

    setContent({ ...initialState, [name]: value });
    inputChangeTimer = setTimeout(
      () => setDoneTyping(true),
      DONE_TYPING_INTERVAL
    );
  };

  const modifyContentBasedOnErrors = useCallback((): SliceContent => {
    const initialState: SliceContent = {
      field1: field1.trim(),
      field2: typeof field2 === "string" ? field2.trim() : field2,
    };
    let content: SliceContent = field3
      ? { ...initialState, field3: field3.trim() }
      : initialState;
    const {
      field1: propsField1,
      field2: propsField2,
      field3: propsField3,
    } = sliceContent;

    if (inputErrors) {
      const { error1, error2, error3 } = inputErrors;
      if (error1) content = { ...content, field1: propsField1 };
      if (error2) content = { ...content, field2: propsField2 };
      if (error3) content = { ...content, field3: propsField3 };
    }

    return content;
  }, [field1, field2, field3, inputErrors, sliceContent]);

  const memoizedUpdateSliceFunc = useCallback(() => {
    const content = modifyContentBasedOnErrors();
    updateSliceFunc(componentIndex, content);
    setDoneTyping(false);
  }, [updateSliceFunc, componentIndex, modifyContentBasedOnErrors]);

  // update sliceState when user is done typing
  useEffect(() => {
    if (doneTyping) memoizedUpdateSliceFunc();
  }, [memoizedUpdateSliceFunc, doneTyping]);

  // clearsError state
  useEffect(() => {
    if (inputErrors) {
      const { error1, error2, error3 } = inputErrors;
      if (!error1 && !error2 && !error3) setInputErrors(null);
    }
  }, [inputErrors]);

  return { handleChange, field1, field2, field3, inputErrors };
};
