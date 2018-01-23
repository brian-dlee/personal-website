import { createActions, handleActions } from "redux-actions";

const initialState = {
  fullText: "",
  charCount: 0,
  menuItem: []
};

const getRandomTime = () => Math.random() * 10;
let timerJobId = null;

const actions = ({ timerService }) => {
  const simpleActions = createActions({
    incrementCharCount: null,
    resetCharCount: null,
    setFullText: null,
    updateVisibleItem: null
  });

  const compoundActions = {
    initialize: text => (dispatch, getState) => {
      dispatch(simpleActions.resetCharCount(0));
      dispatch(simpleActions.setFullText(text));

      timerJobId = timerService.add(() => {
        dispatch(simpleActions.incrementCharCount());

        const { charCount, fullText } = getState().terminal;

        if (charCount > fullText.length) {
          timerService.stop(timerJobId);
        }
      }, getRandomTime());
    },
    navigate: (path, data) => (dispatch, getState) => {
      dispatch(simpleActions.resetCharCount());
      dispatch(simpleActions.updateVisibleItem({ path, ...data }));

      timerService.restart(timerJobId);
    }
  };

  return { ...simpleActions, ...compoundActions };
};

const reducer = () =>
  handleActions(
    {
      incrementCharCount: state => ({
        ...state,
        charCount: state.charCount + 1
      }),
      resetCharCount: state => ({
        ...state,
        charCount: 0
      }),
      setFullText: (state, action) => ({
        ...state,
        fullText: action.payload
      }),
      updateVisibleItem: (state, action) => ({
        ...state,
        menuItem: action.payload.path,
        fullText: action.payload.text || "Select an option below to read more.",
        url: action.payload.url,
        lang: action.payload.lang
      })
    },
    initialState
  );

export default { actions, reducer };
