export default function fav(state, action) {
    switch (action.type) {
      case 'FETCH_REPOS':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }
  