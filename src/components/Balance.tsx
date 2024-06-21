import { useState } from "react"


const Balance = () => {
    const [balance , setBalance] = useState(false);

   function clickHandler(){
     setBalance(true)
   }

  return (
    <div>
        your baance = <button onClick={clickHandler}>show  {balance}</button>
    </div>
  )
}

export default Balance
