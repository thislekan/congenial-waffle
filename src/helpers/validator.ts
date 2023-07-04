type valueType = string | number;

export const validateInput = (
  val: valueType,
  inputType: string
): string | undefined => {
  if (inputType === "text" && typeof val === "string") {
    const invalidString = val.length > 1 && !val.trim();
    if (invalidString) return "The value provided for this field is invalid.";
  }

  if (inputType === "color" && typeof val === "string") {
    const invalidColor = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(val);

    if (!invalidColor) {
      return "Please provide a valid hexadecimal value for colors";
    }
  }
  return undefined;
};
