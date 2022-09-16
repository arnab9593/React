import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetail = () => {

    const getData = (url) => {
        return fetch(url).then((res) => res.json())
    }

    const { user_id } = useParams();
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        getData(`https://reqres.in/api/users/${user_id}`).then((res) =>
            setUserDetails(res.data)
        )
    }, [user_id])


    return (
        <div>
            <img src={userDetails.avatar} key={userDetails.id} alt='error'></img>
            <p>ID : {userDetails.id} </p>
            <p>Name : {userDetails.first_name} {userDetails.last_name}</p>
            <p>Email : {userDetails.email} </p>
        </div>
    )

}

export default UserDetail

