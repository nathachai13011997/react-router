import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount(count + 1)
    }
    return <>
        <div>
            {count}
            <button onClick={onClick}>ClickMe</button>
        </div>
    </>
}
export default Count
