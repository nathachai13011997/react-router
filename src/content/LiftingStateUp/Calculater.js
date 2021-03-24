import React from 'react'
import TemperatureInput from './TemperatureInput '
// import toCelsius from './toCelsius'
// import toFahrenheit from './toFahrenheit'
// import BoilingVerdict from './BoilingVerdict'

const Calculater = () => {
    // const [temperature, setTemperature] = useState('')
    // const handleChange = (e) => {
    //     setTemperature(e.target.value)
    // }
    
    return <>
        {/* <fieldset>
            <legend>Enter temperature in Celsius:</legend> */}
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
            {/* <input
                value={temperature}
                onChange={handleChange}
            />
            <BoilingVerdict celsius={parseFloat(temperature)} /> */}

        {/* </fieldset> */}
    </>
}
export default Calculater
