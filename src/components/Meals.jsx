import { useGlobalContext } from "../Context"
import {BsHandThumbsUp , BsHandThumbsUpFill} from 'react-icons/bs'
import { useState } from "react"
const Meals =()=>{
    const {meals} = useGlobalContext()
    const {loading}= useGlobalContext()
    const {selectMeal} = useGlobalContext()
    const {selected} = useGlobalContext()
    const {favorite} = useGlobalContext()
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
                    const {idMeal,strMeal:title,strMealThumb:image}=meal
                    return(
                        <div className="meals" key={idMeal} onClick={()=>selectMeal(idMeal)} >
                        <img src={image} style={{width:'300px'}} className='img'  ></img>
                        <footer className="foot">
                            <p> {title}</p>
                            <button className="btn" onClick={()=>favorite(idMeal)}>{btn}</button>
                        </footer>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Meals;