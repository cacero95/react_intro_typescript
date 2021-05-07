import { useEffect, useReducer } from "react";

interface AuthState {
    validating: boolean,
    token: string | null,
    username: string,
    name: string
}

const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    name: ''
}

type LoginUser = {
    username: string,
    name: string
} 

type AuthAction = 
    { type: 'logout' } |
    { type: 'login', payload: LoginUser }

const authReducer = ( state: AuthState, action: AuthAction ): AuthState  => {
    switch ( action.type ) {
        case 'logout':
            return {
                validating: false,
                token: null,
                username: '',
                name: ''
            }
        case 'login':
            return {
                ...state,
                validating: false,
                token: `${ Math.random() }login`,
                ...action.payload
            }
        default:
            return state;
    }
}

export const Login = () => {

    const [ { validating, token, name }, dispatch ] = useReducer(authReducer, initialState);
    
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    return (
        <>
          <h3>Login</h3>
          {
              validating ? (
                <div className="alert alert-info" role="alert">
                    ...validando
                </div>

              ) : (
                <>
                    {
                        token ? (
                            <>
                                <div className="alert alert-success" role="alert">
                                    Autenticado bienvenido {
                                        `${ name.charAt(0).toLocaleUpperCase() }${ name.slice(1) }`
                                    }
                                </div>
                                <button
                                    className = "btn btn-danger"
                                    onClick = { () => dispatch({ type: 'logout' }) }
                                >
                                    Logout
                                </button>
                            </>        
                        ) : (
                            <>
                                <div className="alert alert-danger" role="alert">
                                    No autenticado
                                </div>
                                <button
                                    className = "btn btn-primary"
                                    onClick = {
                                        () => dispatch({
                                            type: 'login',
                                            payload: {
                                                name: 'andres',
                                                username: 'cacero95'
                                            }
                                        })
                                    }
                                >
                                    Login
                                </button>
                            </>
                        )
                    }
                </>
              )
          }
        </>
    )
}
