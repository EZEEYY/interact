import { useGlobalContext } from "../Context"
import {BsHandThumbsUp,BsHandThumbsUpFill} from 'react-icons/bs'
const Meals =()=>{
    const {meals} = useGlobalContext()
    console.log(meals)
    return(
        <div className="foods">
            {meals.map((meal)=>{
                return(
                <div className="meals">
                    <img src={meal.strMealThumb} style={{width:'300px'}} className='img'></img>
                    <footer className="foot">
                        <p> {meal.strMeal}</p>
                        <button className="btn">{<BsHandThumbsUp/>}</button>
                    </footer>
                </div>)
            })}
        </div>
    )
}
export default Meals;