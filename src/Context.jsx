import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppProvider = ({children})=>{
    const [loading,setloading] = useState(false)
    const [meals,setmeals] = useState([])
    const [search,searchup] = useState('')
    const[showmo,showmoup] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [fav,favup] = useState([]);
    const selectMeal = (idMeal, favoriteMeal) => {
        let meal;
        
        meal = meals.find((meal) => meal.idMeal === idMeal);
        
        setSelectedMeal(meal);
        showmoup(true)
        
    }
    const favorite = (idMeal)=>{
        console.log(idMeal)
        const already = fav.find(meal=>meal.idMeal===idMeal)
        if(already)
        return
        const choosenOne = meals.find(meal=>meal.idMeal===idMeal)
        const updated = [...fav,choosenOne]
        favup(updated) 
        //console.log(fav)
    }
    const remove=(idMeal)=>{
        const removed = fav.filter(meal=>meal.idMeal!==idMeal)
        favup(removed)
    }
    //console.log(fav)
    const closeModal=()=>{
        showmoup(false)
    }
    const fetchMeals = async(url)=>{
        setloading(true)
        try{
            const {data} = await axios(url)
           // console.log(data.meals)
            setmeals(data.meals)
        }
        catch(e){
            console.log(e.response)
        }
        setloading(false)
    }
    const randommeal = ()=>{
        fetchMeals(randomMealUrl)
    }
    useEffect(()=>{
        fetchMeals(`${allMealsUrl}${search}`)
    },[search])

    return <AppContext.Provider value={{meals,loading,searchup,randommeal,showmo,selectMeal,selectedMeal,closeModal,favorite,fav,remove}}>
                {children}
            </AppContext.Provider>
    
}
export  { AppContext , AppProvider}
export const useGlobalContext = ()=>{return useContext(AppContext)}


