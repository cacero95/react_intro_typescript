import { useState } from 'react';
export const useCounter = ( init: number = 0 ) => {
    const [value, setValue] = useState<number>( init );
    const updateValue = ( number:number ) => {
        setValue( number + value );
    }
    return {
        updateValue,
        value
    }
}
