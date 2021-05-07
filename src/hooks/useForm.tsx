import { useState } from 'react';

export const useForm = <T extends Object> ( initialState: T ) => {
    const [ form, setForm ] = useState(initialState);

    const onChange = ( value: string, field: keyof T ) => {
        setForm({
            ...form,
            [ field ]: value
        });
    }

    return {
        ...form,
        onChange,
        form
    }
}
