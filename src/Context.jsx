import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppProvider = ({children})=>{
    const [loading,setloading] = useState(false)
    const [meals,setmeals] = useState([])
    const [search,searchup] = useState('')
    const fetchMeals = async(url)=>{
        setloading(true)
        try{
            const {data} = await axios(url)
            console.log(data.meals)
            setmeals(data.meals)
        }
        catch(e){
            console.log(e.response)
        }
        setloading(false)
    }
    useEffect(()=>{
        fetchMeals(`${allMealsUrl}${search}`)
    },[search])

    return <AppContext.Provider value={{meals,loading,searchup}}>
                {children}
            </AppContext.Provider>
    
}
export  { AppContext , AppProvider}
export const useGlobalContext = ()=>{return useContext(AppContext)}


