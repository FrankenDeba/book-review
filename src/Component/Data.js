import React from "react";
import { connect } from "react-redux";
import {fetchdata} from "../action/actionCreator";
import styles from "./Data.module.css";

class Data extends React.Component{
    constructor(props){
        super(props)
        this.loader = ""
    }
    componentDidMount(){
        this.props.getData();
    }
    render(){
        
        return(
            
            <>
            {this.props.isLoading?this.loader = "Loading":null}
            {this.props.data.map(item =>{
                return <div className = {styles.container} key = {item}><div className = {styles.image}><img src = {item[2]}></img></div><div className= {styles.author}>written by:{item[1]}</div><div className = {styles.desc}>{item[3]}</div></div>
            })}
            
            </>
    
        
        )
    }
    
}
const mapStateToProps = (state) =>{
    
    return ({data:state.data,
    isLoading:state.isLoading,
    error:state.error
    
})
}

const mapDispatchToProps = (dispatch) =>{
    return ({
        getData:()=>dispatch(fetchdata())
            
        

    })
}
export default connect(mapStateToProps,mapDispatchToProps)(Data);