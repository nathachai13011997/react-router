import React, { useState } from 'react'
import UseEffectDamochild from './UseEffectDamochild'
const UseEffectDamo2 = () => {
    const [isShow, setisShow] = useState(true)
    return <>
        <div>
            {isShow && <UseEffectDamochild />}
            <button onClick={() => setisShow(false)}>Hide</button>
        </div>
    </>
}
export default UseEffectDamo2
