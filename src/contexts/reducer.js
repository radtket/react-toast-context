import { ADD, REMOVE, REMOVE_ALL } from "./types";

export default (state, { type, payload }) => {
  switch (type) {
    case ADD:
      return [
        ...state,
        {
          id: +new Date(),
          content: payload.content,
          type: payload.type,
        },
      ];
    case REMOVE:
      return state.filter((t) => t.id !== payload.id);
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
};
