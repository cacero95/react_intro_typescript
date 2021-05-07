import { useForm } from '../hooks/useForm';


interface Formulary {
    email: string,
    password: string
}

export const Forms = () => {

    const { email, password, onChange, form } = useForm <Formulary> ({
        email: 'cacero95@gmail.com',
        password: 'que le importa'
    });

    return (
        <>
            <h3>Formulario</h3>
            <input 
                type="email"
                name="email"
                value = { email }
                onChange = {
                    ({ target }) => onChange( target.value, 'email' )
                }
                id=""
                placeholder = "Email..."
            />
            <input 
                type="text"
                name="password"
                value = { password }
                onChange = {
                    ({ target }) => onChange( target.value, 'password' )
                }
                id=""
                placeholder="Password..."
            />
            <code>
                <pre>
                    { JSON.stringify( form, null, 2 ) }
                </pre>
            </code>
        </>
    )
}
