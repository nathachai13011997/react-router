import React, { useState } from 'react'
const Composition = (props) => {
    const [data, setData] = useState('')
    const onChange = (e) => {
        setData(e.target.value)
    }
    return <>
        <div>
          <h1>{props.title} {data}</h1>
          <input type="text" value={data} onChange={onChange} />
        </div>
    </>
}
export default Composition
