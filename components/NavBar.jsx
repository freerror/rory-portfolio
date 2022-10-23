import { BsFillMoonStarsFill } from 'react-icons/bs'
const NavBar = (props) => (
    <nav className='mx-2 p-2 flex items-center justify-between bg-fuchsia-50 dark:bg-stone-700 rounded-b-2xl sticky left-0 right-0 top-0 z-20'>
        <h1 className='text-lg my-auto w-1/2'>Rory Coded This</h1>
        <BsFillMoonStarsFill onClick={props.toggleDark} className='cursor-pointer text-xl h-10' />
        <a className=' bg-gradient-to-r from-purple-400 to-purple-300 text-white px-4 py-2 rounded-xl' href="/uploads/CV-2022_10.pdf" download>
            CV
        </a>
    </nav>
)

export default NavBar