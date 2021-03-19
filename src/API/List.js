import axios from 'axios'
import React,{ useEffect, useState} from 'react'

function List() {
const [state, setstate] = useState([])
    useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/posts")
   .then((res)=>{
       console.log(res.data.slice(0,10))
       setstate(res.data.slice(0,10))
    })
   .catch((e)=>{console.log(e)})
        
    }, [])


    return (
        <div>
           {
               state.map(
                   (item, ind)=> (
                       <div key={ind}>{item.title}</div>
                   )
               )
           }
        </div>
    )
}

export default List
