import React from "react";
import CityList from './CityList'

export default{
    title: "CityList",
    component: CityList
}

const cities= [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Buenos Soles", country: "Argentino"},
    {city: "Buenas Sombras", country: "Argentana"}

]
export const CityListExample = () => <CityList cities={cities} />
