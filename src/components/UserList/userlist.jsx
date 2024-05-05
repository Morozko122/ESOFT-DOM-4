import React, { useEffect, useState } from "react"
import { User } from "./user";
import { v4 as uuidv4 } from 'uuid';
import './userlist.css'

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const userJsonData = await response.json();
                setUsers(userJsonData);
            } catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, []);


    console.log(users);
    return (
        <>
            <div className="user-list">
                <h1>Список пользователей</h1>
                {users.map((user) => (<User key={uuidv4()} user={user}/>))}
            </div>
        </>
    )
}