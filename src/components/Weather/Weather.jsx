import PropTypes from 'prop-types'
import React from 'react'
import Typography from "@material-ui/core/Typography";
import {WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain} from 'react-icons/wi'
import {IconContext} from 'react-icons'

const stateByName = {
    cloud:WiCloud,
    cloudy:WiDayCloudy,
    fog: WiDayFog,
    sunny:WiDaySunny,
    rain: WiRain,
}

const renderState = state => {
    let Icon = stateByName[state]
    if (Icon === undefined){
        Icon = stateByName["sunny"]
    }
    return <Icon/>
}
const Weather = ({temperature,state}) => {
    return (
        <div>
            <IconContext.Provider value={{size : '4em'}}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display="inline" variant="h4">{temperature}</Typography>

        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
}
export default Weather