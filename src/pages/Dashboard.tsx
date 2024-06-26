import Balance from "../components/Balance"
import Navbar from "../components/Navbar"
import Users from "../components/Users"


const Dashboard = () => {
  return (
    <div className="bg-slate-200 h-screen">
      <Navbar/>
      <Balance value={"10000"}/>
      <Users/>

    </div>
  )
}

export default Dashboard
