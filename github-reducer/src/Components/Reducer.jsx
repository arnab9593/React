function Reducer(state,action) {
switch(action.type) {
    case "Loading":
        return {...state, isLoading: true, isError: false};
     case "SUCCESS" :
        return {...state, isLoading: false, data: action.payload};
        
      case "ERROR" :
        return {...state, isLoading: false, isError: true};
}
}

export default Reducer;