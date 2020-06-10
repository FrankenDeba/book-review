import {FETCH_DATA_REQUEST, FETCH_DATA_DONE, FETCH_DATA_FAILED} from "./actionType";
import axios from "axios";
export const fetchdatarequest = () =>{
    return ({
        type:FETCH_DATA_REQUEST
    })
}

export const fetchdatadone = (data) =>{
    return ({
        type:FETCH_DATA_DONE,
        payload:data
    })
}

export const fetchdatafailed = (error) =>{
    return({
        type:FETCH_DATA_FAILED,
        payload:error
        
    })
}
export const fetchdata = ()=>{
    return function(dispatch){
        dispatch(fetchdatarequest())
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=BfvkpaKvPCPVFyBempYKJeTUWj1weLej")
        .then((response) =>{
            const data = response.data.results.books.map(item =>  [item.rank,item.author,item.book_image,item.description])
            dispatch(fetchdatadone(data))
            console.log(response.data.results.books);
            
        }
            
            
        )
        
            .catch((error)=>{
            dispatch(fetchdatafailed(error.message))
        })
    }
}