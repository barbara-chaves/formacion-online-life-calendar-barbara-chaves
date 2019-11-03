export default function saveStateReducer(state = [], action) {
  switch (action.type) {
    case "SAVE_STATUS":
      const newState = [...state, action.payload];
      return newState.sort((a, b) =>
        new Date(a.date) > new Date(b.date) ? -1 : 1
      );
    default:
      return state;
  }
}
