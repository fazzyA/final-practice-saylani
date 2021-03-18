import React, {useContext} from 'react'
import {UserContext} from '../context/UserContext'
const User = () => {
    const userContext = useContext(UserContext)
    console.log(userContext)
    const user = userContext[0]
    return (
        <div>
            {
                user.map((item, ind) => {
                 return   <li key={ind}> Name:  {item.name}, Postion: {item.position} </li>
                })
            }
        </div>
    )
}

export default User
