import  { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const Home : React.FC = () => {
  return (
    <div  className= "flex flex-col gap-5 justify-center items-center h-screen">
    <div className=" font-medium text-2xl">Welcome to,  <span className="text-blue-500">devBalance</span></div>
    <Button className  ="bg-blue-500">Shadcn Button</Button>
    <Link to={'/signup'}>Signup Page</Link>
    </div>
  )
}

export default Home