import React, { createContext, useState } from 'react'
export const UserContext = createContext();

const Myfunction = (props) => {
    const [user, setUser] = useState([
        { 
            name : 'Jawaria',
            position: 'Backend Developeer',
        },
        { 
            name : 'Ramsha',
            position: 'Frontend Developeer',
        },
        { 
            name : 'Sabahat',
            position: 'UI/UX Developeer',
        },
        { 
            name : 'Maryam',
            position: 'SQA Engineer',
        },
    ]);

    return (
            <UserContext.Provider value={[user, setUser]}>
                {props.children}
            </UserContext.Provider>

        )
}

export default Myfunction