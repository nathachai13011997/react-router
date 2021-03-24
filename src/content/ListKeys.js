import React from 'react'
const ListKeys = () => {
    // const myArray = [1, 2, 3, 4, 5]
    const data = [{ id: 1, value: "tan" },
    { id: 2, value: "Chin" },
    { id: 3, value: "Bank" },]
    const listArray = data.map((number, index) => {
        return (
            <li key={index}>{number.value}</li>
        )
    })
    return <>
        <div>
            <ul>
                {listArray}
            </ul>
        </div>
    </>
}
export default ListKeys
