import React from "react";

import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import CityList from "./CityList";

const cities= [
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Buenos Soles", country: "Argentino"},
    {city: "Buenas Sombras", country: "Argentana"}

]
test ("CityList render", async () => {
    const {findAllByRole} = render(<CityList cities={cities}/>)
    const items = await findAllByRole("listItem")
    expect(items).toHaveLength(3);
})