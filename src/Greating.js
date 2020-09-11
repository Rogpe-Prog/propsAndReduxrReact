import React from 'react'

const Greating = (props) => {
    return(
        <div>
            <p>Here is Greating Component</p>
            <p>Hey {props.name}, how's going from Props?</p>
        </div>
    )
}

export default Greating