import React, { useState } from 'react'

const TemperatureInput = (props) => {
    const scaleName = {
        c: 'Celsius',
        f: 'Fahrenheit',
    }
    const [temperature, setTemperature] = useState('')
    const handleChange = (e) => {
        setTemperature(e.target.value)
    }
    return <>
        <fieldset>
            <legend>Enter temperature in {scaleName[props.scale]}:</legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    </>
}

export default TemperatureInput 
