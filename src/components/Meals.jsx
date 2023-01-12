import { useGlobalContext } from "../Context"
import {BsHandThumbsUp , BsHandThumbsUpFill} from 'react-icons/bs'
import { useState } from "react"
const Meals =()=>{
    const {meals} = useGlobalContext()
    console.log(meals)
    const [btn,btnup] = useState(<BsHandThumbsUp/>)
    function update(){
        btnup(<BsHandThumbsUpFill/>)
    }

    return(
        <div className="foods">
            {meals.map((meal)=>{
                return(
                <div className="meals">
                    <img src={meal.strMealThumb} style={{width:'300px'}} className='img'></img>
                    <footer className="foot">
                        <p> {meal.strMeal}</p>
                        <button className="btn" onClick={update}>{btn}</button>
                    </footer>
                </div>)
            })}
        </div>
    )
}
export default Meals;