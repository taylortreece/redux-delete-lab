import React from 'react'

const Band = props => {
    console.log(props.band)
    return (
        <div>
            <li>{props.band.name.name}</li><br />
            <button onClick={() => props.delete(props.band.id)}>x</button>
        </div>
    )
}

export default Band;