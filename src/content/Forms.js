import React, { useState } from 'react'
const Forms = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        value: 'A',
    }
    const [data, setData] = useState(initialState)
    const onChange = (e) => {
        setData({ ...data, firstName: e.target.value })
    }
    const onChange2 = (e) => {
        setData({ ...data, lastName: e.target.value })
    }
    const onChange3 = (e) => {
        setData({ ...data, value: e.target.value })
    }
    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(data)
            setData(initialState)
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={data.firstName} onChange={onChange} />
            <br />
            <input type="text" value={data.lastName} onChange={onChange2} />
            <br />
            <select onChange={onChange3}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <br />
            <button type="submit">Click</button>
        </form>
    </>
}
export default Forms
