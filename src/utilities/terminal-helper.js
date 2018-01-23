import { both, filter, propSatisfies } from "ramda";

const entry = () => ({ visible: "", hidden: "" });

const getContent = (text, visibleLength) =>
  filter(l => !isEmpty(l), parseText(text, visibleLength));

const isEmpty = both(
  propSatisfies(t => t.trim().length === 0, "visible"),
  propSatisfies(t => t.trim().length === 0, "hidden")
);

const parseText = (text, visibleLength) =>
  text.split("").reduce(
    (result, char, charNumber) => {
      let type = charNumber + 1 > visibleLength ? "hidden" : "visible";

      if (char === "\n") {
        return [...result, entry()];
      }

      result[result.length - 1][type] += char;
      return result;
    },
    [entry()]
  );

export { entry, getContent, isEmpty, parseText };
