import { useState, useRef, useEffect } from 'react';
import { User, ReqResList } from '../interfaces/reqRes_interfaces';
import { reqResApi } from '../api/reqRes';
export const useUsers = () => {

    const [ users, setUsers ] = useState<User[]>([]);
    const pageRef = useRef(1); // is unaffected by the update on the state and the render actions
    useEffect(() => {
        loadUsers();
    }, [])

    const nextPage = () => {
        if ( pageRef.current === 2 ){
            alert('No next pages left')
        } else {
            pageRef.current++;
            loadUsers();
        }
    }

    const prevPage = () => {
        if ( pageRef.current === 1 ){
            alert('No previous pages left')
        } else {
            pageRef.current--;
            loadUsers();
        }
    }
    const loadUsers = async () => {
        try {

            const resp = await reqResApi.get<ReqResList>('/users', {
                params: {
                    page: pageRef.current
                }
            });
            resp && resp.data.data.length > 0
            ? setUsers( resp.data.data )
            : alert('No registers was found');

        } catch (err) {
            console.log( err.message  )
        }
    }

    return {
        nextPage,
        prevPage,
        users
    }
}
