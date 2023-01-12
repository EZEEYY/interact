import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppProvider = ({children})=>{
    const [meals,setmeals] = useState([])
    const fetchMeals = async(url)=>{
        try{
            const {data} = await axios(url)
            console.log(data.meals)
            setmeals(data.meals)
        }
        catch(e){
            console.log(e.response)
        }
    }
    


    useEffect(()=>{
        fetchMeals(allMealsUrl)
    },[])

    return <AppContext.Provider value={{meals}}>
                {children}
            </AppContext.Provider>
    
}
export  { AppContext , AppProvider}
export const useGlobalContext = ()=>{return useContext(AppContext)}


