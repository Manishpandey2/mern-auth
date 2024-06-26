import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className="flex justify-between max-w-6xl mx-auto p-3 items-center">
            <Link to={'./'}>
                <h1 className='font-bold'>MERN AUTH</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to={'./'}>
                    <li>Home</li>
                </Link>
                <Link to={'./about'}>
                    <li>About</li>
                </Link>
                <Link to={'./sign-in'}>
                    <li>Sign IN</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
