const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if(Number.isNaN(input)){
        return ''
    }
    const output = convert(input)
    // Math.round ปัด เศษ 0.5 ขึ้น 0.4 ลง
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}
export default tryConvert
