import React from 'react'

const ConditionalRendering = () => {

  return <>
    <div>
      <h1 >Conditional Rendering</h1>
      {/* if */}
      {1 > 0 && console.log('Yes')}
      {/* if else  */}
      {2 > 1 ? console.log('Yes') : console.log('NO')}

      {/* short if elseif else  */}
      {(!2 > 1 && 3 > 1) || (2 < 1) ? (
        console.log('Yes')
      ) : 2 > 1 ? (
        console.log('No')
      ) : (
            console.log('test')
          )}


    </div>
  </>
}

export default ConditionalRendering