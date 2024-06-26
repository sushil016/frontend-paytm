import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Buttonui from "./Buttonui";

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
    <>
    
    <div className="w-full  p-2 flex justify-center " >
      <input className="w-2/6 rounded-md p-2 hover:opacity-90" type="text" placeholder="search a user..." onChange={(e)=>{setFilter(e.target.value)}} />
    </div>

    <div>
      {users.map(user => <User user={user}/>)}
    </div>
    
    </>
    
  )
}

function User({user}){

  const navigate = useNavigate();
    return(
        <>
         <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Buttonui onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
        </>
    )
}

export default Users
