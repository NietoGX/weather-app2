import React from "react";
import CityInfo from "./CityInfo"; //SUT
import {render} from "@testing-library/react"
test("CityInfo render", async () => {
    //AAA
    const city= "Buenos Aires";
    const country= "Argentina";
    //Arange
    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)
    //Act
    const cityAndCountryComponent =  await findAllByRole("heading")
    //Assert
    expect(cityAndCountryComponent[0]).toHaveTextContent(city);
    expect(cityAndCountryComponent[1]).toHaveTextContent(country);
})