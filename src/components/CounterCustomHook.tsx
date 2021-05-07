import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {
    const { value, updateValue } = useCounter(10);
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
