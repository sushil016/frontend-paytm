import axios from "axios";
import { useEffect, useState } from "react"

const Users = () => {

    const [users, setUsers] = useState([]);
    const [filter , setFilter ]  = useState("")

    useEffect(()=>{
        axios.get("https://localhost:3000/api/v2/user/bulk?filter" + filter)
        .then(response =>{
            setUsers(response.data.user)
        })
    },[filter])
  return (
    <div>
      <input type="text" placeholder="search a user..." onChange={(e)=>{setFilter}} />
    </div>
  )
}

function User(){
    return(
        <div>h</div>
    )
}

export default Users
