export default function search(state, action) {
  switch (action.type) {
    case 'FETCH_SEARCH_REPOS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
