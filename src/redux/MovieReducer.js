const initialState = null;

export const MovieReducer = (state=initialState,{type,payload}) =>{
    // console.log(action.payload)
    // return state;
    switch (type){
        case "GetAllMovies":
            return payload;
        default:
          return state;
    }
}