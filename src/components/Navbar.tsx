import { Button } from '@mui/material'


const Navbar = () => {
  return (
    <div className='w-full h-[50px] bg-zinc-300 flex justify-between items-center px-12 '>
      <div className='font-bold'>payTM</div>
      <div className='gap-4 flex '>
      <div><Button variant="outlined">Transfer money</Button></div>
      <div><Button variant="outlined">Balance</Button></div>
      </div>
    </div>
  )
}

export default Navbar
