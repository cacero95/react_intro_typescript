import { useState } from "react"

export const Counter = () => {
    const [value, setValue] = useState<number>(0);
    const updateValue = ( number:number ) => {
        setValue( number + value );
    }
    return (
        <>
            <h3>
                Contador <small>{ value }</small>    
            </h3>
            <button
                className = "btn btn-primary"
                onClick = { () => updateValue(1) }
            >
                1
            </button>
            &nbsp;
            <button
                className = "btn btn-primary"
                onClick = { () => updateValue(-1) }
            >
                -1
            </button>
            &nbsp;
            {/* &nbsp; space between html compents */}
            <button
                className = "btn btn-primary"
                onClick = { () => updateValue(2) }
            >
                2
            </button>
        </>
    )
}
