import { Link } from 'react-router-dom'
import '../../images/nav.jpg'

function Navbar() {
    return (
        <div className=' px-[3rem] items-center'>
            <div className="nav-logo text-2xl text-white font-semibold font-mono">
                <Link to="/">
                The Rick and Morty
                </Link>

            </div>
        </div>
    )
}

export default Navbar
