import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const UserProfile = () => {

    const {id} = useParams()
    const [userData, setUserData] = useState()

    useEffect(() => {
        try {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => response.json())
                .then((json) => setUserData(json));

        } catch (error) {
            console.log(error)
        }
    },[])

    return (
        <div>
            <span>User info</span>
            <br/>
            <span>{userData?.name}</span>
            <br/>
            <span>{id}</span>
        </div>
    );
};

export default UserProfile;