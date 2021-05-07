import { User } from '../interfaces/reqRes_interfaces';
import { useUsers } from '../hooks/useUsers';


export const Users = () => {

    const { nextPage, prevPage, users }  = useUsers();
    return (
        <>
            <h3>Users</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( ( { id, first_name, last_name, email, avatar }: User ) => {
                            return (
                                <tr key = { id }>
                                    <td>
                                        <img
                                            src = { avatar } alt = { first_name }
                                            style = {{
                                                width: 50,
                                                borderRadius: 100,
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </td>
                                    <td>
                                        { first_name } { last_name }
                                    </td>
                                    <td>
                                        { email }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button
                className = "btn btn-danger"
                onClick = { prevPage }
            >
                Back
            </button>
            <button
                className = "btn btn-primary m-2"
                onClick = { nextPage }
            >
                Next
            </button>
        </>
    )
}
