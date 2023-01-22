import React from "react";
import { useGlobalContext } from "../Context";

function Header(){
    const[text,textup] = React.useState('')
    const {searchup} = useGlobalContext()
    const {randommeal} =useGlobalContext()
    function change(event){
        textup(event.target.value)
    }
    function clicked(){
        if(text){
            searchup(text)
        }

       // console.log(text)
    }
    
    return(
        <div >
            <div className="head">
                <input onChange={change} value={text} />
                <button onClick={clicked}>Search</button>
                <button onClick={randommeal}>Suprise Me!</button>
            </div> 
        </div>
        
    )
}
export default Header;