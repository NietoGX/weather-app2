import PropTypes from 'prop-types'
import React from 'react'
import Typography from "@material-ui/core/Typography";
import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";


const renderCityAndCountry = cityAndCountry => {
    const {city,country} = cityAndCountry
    return (
        <li key={city}>
            <CityInfo city={city} country={country}/>
            <Weather temperature={10} state={"sunny"}/>
        </li>

        )
}

const CityList = ({cities}) => {
    return (
        <ul>
            {
                cities.map(cityAndCountru => renderCityAndCountry(cityAndCountru))
            }

        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}
export default CityList