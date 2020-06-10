import { FETCH_DATA_DONE,FETCH_DATA_REQUEST, FETCH_DATA_FAILED } from "../action/actionType";

const initialState = {
    isLoading: false,
    data:[],
    error:""  
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return (
                {
                    ...state,
                isLoading:true
                }
            )
        case FETCH_DATA_DONE:
            
            return ({
                ...state,
                isLoading:false,
                data:action.payload,
                error:""
            })
        case FETCH_DATA_FAILED:
            return ({
                ...state,
                isLoading:false,
                data:[],
                error:action.payload

            })
        default:
            return state;
                
    }
}
export default reducer;