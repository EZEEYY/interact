import { useGlobalContext } from "../Context"
import {BsHandThumbsUp , BsHandThumbsUpFill} from 'react-icons/bs'
import { useState } from "react"
const Meals =()=>{
    const {meals} = useGlobalContext()
    const {loading}= useGlobalContext()
   // const {rand} = useGlobalContext()
    console.log(meals)
    const [btn,btnup] = useState(<BsHandThumbsUp/>)
    function update(event){
        console.log(event.target.value)
        btnup(<BsHandThumbsUpFill/>)
    }
    /* const [randum,randumup] =useState(false)
    function random(){
        randumup(true)
        console.log(rand.strMeal)
    } */

    return(
        
        

        loading===true?<h1>Loading...</h1>:
        <div>
                <div className="foods">
                {meals.map((meal)=>{
                    return(
                        //randum===true?<div>{rand}</div>:
                        <div className="meals">
                        <img src={meal.strMealThumb} style={{width:'300px'}} className='img'></img>
                        <footer className="foot">
                            <p> {meal.strMeal}</p>
                            <button className="btn" onClick={update} >{btn}</button>
                        </footer>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Meals;