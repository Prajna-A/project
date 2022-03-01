const initialState = {
    Nobelwinners: [],
    loadingNobelwinners:false
  };
  const NobelReducer = (state = initialState, action) => {
    if (action.type === 'UPDATENOBELWINNERS') {
      return { ...state, Nobelwinners: [...action.payload] };
    }
    if (action.type === 'LOADING') {
      return { ...state, loadingNobelwinners: true };
    }
    if (action.type === 'LOADED') {
      return { ...state, loadingNobelwinners: false };
    }
    return state;
  };
  export default NobelReducer;
  