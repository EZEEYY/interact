import { useGlobalContext } from "../Context";
import React from "react";
function Favourite(){
    const {meals} = useGlobalContext()
    const {selectedmeal} = useGlobalContext()
    const {remove} = useGlobalContext()
    const {favorite} = useGlobalContext()
    const {fav} = useGlobalContext()
    console.log(fav)

    return(
        <div className="favourite">
        
        <h2>Favourite</h2>
        <fav>
        
        {fav.map((meal)=>{
            return(
                <div className="mine">

                    <img src={meal.strMealThumb} className='favimg' onClick={()=>remove(meal.idMeal)} ></img>
                </div>
                )
            })}
            </fav>
    </div>
    )
}
export default Favourite;